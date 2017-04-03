using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Primitives;
using AspNet.Security.OpenIdConnect.Server;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using NgCmsBackend.Contexts;
using NgCmsBackend.Enums;
using NgCmsBackend.Services;
using NgCmsBackend.Helpers;

namespace NgCmsApi.Controllers
{
    [EnableCors("Policy")]
    [Route("api/Auth")]
    public class AuthorizationController : Controller
    {
        private readonly RoleService _roleService;
        private readonly UserService _userService;

        public AuthorizationController(NgCmsContext dbContext)
        {
            _roleService = new RoleService(dbContext);
            _userService = new UserService(dbContext);
        }

        [Route("Token")]
        [HttpPost]
        [Produces("application/json")]
        public async Task<IActionResult> Exchange(OpenIdConnectRequest request)
        {
            if (request.IsPasswordGrantType())
            {
                // Validate the user credentials.
                // Note: to mitigate brute force attacks, you SHOULD strongly consider
                // applying a key derivation function like PBKDF2 to slow down
                // the password validation process. You SHOULD also consider
                // using a time-constant comparer to prevent timing attacks.

                var user = await _userService.GetByName(request.Username);

                if (user == null || PasswordHelper.CheckPassword(user, request.Password))
                {
                    return Forbid(OpenIdConnectServerDefaults.AuthenticationScheme);
                }
                // Create a new ClaimsIdentity holding the user identity.
                var identity = new ClaimsIdentity(
                    OpenIdConnectServerDefaults.AuthenticationScheme,
                    OpenIdConnectConstants.Claims.Name,
                    OpenIdConnectConstants.Claims.Role);
                // Add a "sub" claim containing the user identifier, and attach
                // the "access_token" destination to allow OpenIddict to store it
                // in the access token, so it can be retrieved from your controllers.
                identity.AddClaim(OpenIdConnectConstants.Claims.Name, user.UserName,
                    OpenIdConnectConstants.Destinations.AccessToken);
                identity.AddClaim(OpenIdConnectConstants.Claims.Subject, user.UserId.ToString(),
                   OpenIdConnectConstants.Destinations.AccessToken);
                identity.AddClaim(OpenIdConnectConstants.Claims.Role, (await _roleService.GetRoleById(user.RoleId)).Name,
                    OpenIdConnectConstants.Destinations.AccessToken);
                // ... add other claims, if necessary.
                var principal = new ClaimsPrincipal(identity);
                // Ask OpenIddict to generate a new token and return an OAuth2 token response.
                return SignIn(principal, OpenIdConnectServerDefaults.AuthenticationScheme);
            }
            throw new InvalidOperationException("The specified grant type is not supported.");
        }

        [Route("IsAdmin")]
        [HttpGet]
        public async Task<bool> IsAdmin()
        {
            var adminRole = await _roleService.GetRoleById((int)RoleEnum.Admin);
            var roleClaim = User.GetClaim(OpenIdConnectConstants.Claims.Role);

            return roleClaim.Equals(adminRole.Name);
        }
    }
}