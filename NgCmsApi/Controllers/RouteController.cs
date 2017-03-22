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
using Microsoft.Ajax.Utilities;

namespace NgCmsApi.Controllers
{
    [Authorize]
    [RoutePrefix("api/Route")]
    public class RouteController : ApiController
    {
        private readonly RouteService _routeService = new RouteService();

        public RouteController()
        {
        }

        [AllowAnonymous]
        [Route("GetRoutes")]
        [HttpGet]
        public async Task<List<RouteTreeModel>> GetRouteTree()
        {
            var routeTree = _routeService.GetRouteTree();
            var routes = await _routeService.GetRoutes();

            Func<int?, Guid?> getRouteGuid = (id) =>
            {
                return routes.FirstOrDefault(p => p.RouteId == id)?.Guid;
            };

            return routeTree.Select(p => new RouteTreeModel()
            {
                Guid = p.Guid,
                Path = p.Path,
                ParentRouteGuid = getRouteGuid(p.ParentId),
                Generation = p.Generation
            }).ToList();
        }

        [AllowAnonymous]
        [Route("GetByPath")]
        [HttpPost]
        public async Task<IHttpActionResult> GetByPath(PathModel model)
        {
            var route = await _routeService.GetRouteByPath(model.Path);

            if (route == null)
            {
                return BadRequest("Route not found");
            }

            return Ok(new RouteModel()
            {
                Guid = route.Guid,
                Path = route.Path,
                ParentGuid = route.tblRoute2.Guid
            });
        }

        [Route("Create")]
        [HttpPost]
        public async Task<IHttpActionResult> CreateRoute(RouteCreateModel model)
        {
            tblRoute route = new tblRoute()
            {
                Path = model.Path
            };

            var foundRoute = await _routeService.GetRouteByPath(model.Path);

            if (foundRoute != null) {
                return BadRequest("Route already exists");
            }

            await _routeService.CreateRoute(route);   

            return Ok(new RouteModel()
            {
                Guid = route.Guid,
                Path = route.Path
            });
        }
    }
}
