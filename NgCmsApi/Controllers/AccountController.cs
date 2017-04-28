using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NgCmsBackend.Contexts;
using NgCmsApi.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Primitives;
using AspNet.Security.OpenIdConnect.Server;
using Microsoft.AspNetCore.Cors;
using NgCmsApi.Extensions;
using NgCmsBackend.Entities;
using NgCmsBackend.Enums;
using NgCmsBackend.Helpers;
using NgCmsBackend.Services;

namespace NgCmsApi.Controllers
{
    [EnableCors("Policy")]
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly UserService _userService;
        private readonly RoleService _roleService;

        public AccountController(NgCmsContext dbContext)
        {
            _userService = new UserService(dbContext);
            _roleService = new RoleService(dbContext);
        }

        [Route("Register")]
        [HttpPost]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            if (model.Password != model.ConfirmPassword)
            {
                return BadRequest("Passwords don't match");
            }

            // Add user to admin-role
            var adminRole = await _roleService.GetRoleById((int)RoleEnum.Admin);

            if (adminRole == null)
            {
                return BadRequest("Role doesn't exist");
            }

            var salt = PasswordHelper.GetSalt();

            var newUser = new tblUser()
            {
                UserName = model.Email,
                Password = Convert.ToBase64String(PasswordHelper.Hash(model.Password, salt)),
                RoleId = adminRole.RoleId,
                Salt = salt
            };

            await _userService.Create(newUser);

            return Ok();
        }

        [Authorize]
        [Route("Test")]
        [HttpGet]
        public IActionResult Test()
        {
            var claims = new
            {
                Subject = User.GetUserId(),
                User.Identity.Name,
                Role = User.GetClaim(OpenIdConnectConstants.Claims.Role)
            };

            return Json(claims);  
        }
    }
}
