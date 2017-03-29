using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NgCmsBackend.Contexts;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using NgCmsApi.Models;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Cors;

namespace NgCmsApi.Controllers
{
    [EnableCors("Policy")]
    [Route("api/Account")]
    public class AccountController : Controller
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        private NgCmsContext _dbContext;

        public AccountController(UserManager<IdentityUser> userManager, SignInManager<IdentityUser> signInManager, RoleManager<IdentityRole> roleManager, NgCmsContext dbContext)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
            _dbContext = dbContext;
        }

        [Route("Register")]
        [HttpPost]
        public async Task<IActionResult> Register(RegisterModel model)
        {
            if (model.Password != model.ConfirmPassword)
            {
                ModelState.AddModelError("Error", "Passwords don't match");
                return BadRequest(ModelState);
            }

            var newUser = new IdentityUser
            {
                UserName = model.Email,
                Email = model.Email
            };

            var userCreationResult = await _userManager.CreateAsync(newUser, model.Password);

            if (!userCreationResult.Succeeded)
            {
                foreach (var error in userCreationResult.Errors)
                    ModelState.AddModelError("Error", error.Description);
                return BadRequest(ModelState);
            }

            return Ok();
        }

        [Authorize]
        [Route("IsAdmin")]
        [HttpGet]
        public async Task<bool> IsAdmin()
        {
            await Setup();
            return await _userManager.IsInRoleAsync(await GetCurrentUser(), "Admin");
        }

        private async Task<IdentityUser> GetCurrentUser()
        {
            return await _userManager.GetUserAsync(User);
        }

        // Initial setup to get roles set up
        public async Task<IActionResult> Setup()
        {
            var user = await GetCurrentUser();

            var adminRole = await _roleManager.FindByNameAsync("Admin");
            if (adminRole == null)
            {
                adminRole = new IdentityRole("Admin");
                await _roleManager.CreateAsync(adminRole);
            }

            if (!await _userManager.IsInRoleAsync(user, adminRole.Name))
            {
                await _userManager.AddToRoleAsync(user, adminRole.Name);
            }

            return Ok();
        }
    }
}
