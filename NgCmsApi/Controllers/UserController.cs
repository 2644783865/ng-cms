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
using System.Linq;

namespace NgCmsApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/User")]
    public class UserController : ApiController
    {
        private readonly UserService _userService = new UserService();

        public UserController()
        {
        }

        [Route("List")]
        [HttpGet]
        public async Task<List<UserTableModel>> GetUserList()
        {
            var users = await _userService.GetUsers();
            return users.Select(x => new UserTableModel()
            {
                Guid = x.Guid,
                UserName = x.UserName,
                Role = x.tblRole.OrderByDescending(z  => z.RoleId).FirstOrDefault().Name
            }).ToList();
        }
    }
}
