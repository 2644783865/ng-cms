using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.Security.OAuth;
using NgCmsApi.Models;
using NgCmsApi.Providers;
using NgCmsBackend;
using NgCmsBackend.DbContexts;
using NgCmsBackend.Enums;
using NgCmsBackend.Repositories;
using NgCmsBackend.Services;

namespace NgCmsApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/Role")]
    public class RoleController : ApiController
    {
        private readonly RoleService _roleService = new RoleService();

        public RoleController()
        {
        }

        [Route("IsAdmin")]
        [HttpGet]
        public async Task<bool> IsAdmin()
        {
            var role = await _roleService.GetRoleById((int)RoleEnum.Admin);

            return ClaimsPrincipal.Current.IsInRole(role.Name);
        }

        [Route("IsEditor")]
        [HttpGet]
        public async Task<bool> IsEditor()
        {
            var role = await _roleService.GetRoleById((int)RoleEnum.Editor);

            return ClaimsPrincipal.Current.IsInRole(role.Name);
        }
    }
}
