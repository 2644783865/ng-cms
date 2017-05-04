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
using Microsoft.EntityFrameworkCore;
using NgCmsBackend.Services;
using Microsoft.AspNetCore.Cors;
using NgCmsBackend.Entities;

namespace NgCmsApi.Controllers
{
    [Route("api/Route")]
    [Authorize]
    public class RouteController : Controller
    {
        private readonly RouteService _routeService;

        public RouteController(NgCmsContext dbContext)
        {
            _routeService = new RouteService(dbContext);
        }

        [AllowAnonymous]
        [Route("GetRoutes")]
        [HttpGet]
        public async Task<List<RouteModel>> GetRoutes()
        {
            var routes = await _routeService.GetRoutes();

            Func<int?, Guid?> getRouteGuid = (id) =>
            {
                return routes.FirstOrDefault(p => p.RouteId == id)?.Guid;
            };

            return routes.Select(p => new RouteModel()
            {
                Guid = p.Guid,
                Path = p.Path,
                ParentRouteGuid = getRouteGuid(p.ParentRouteId)
            }).ToList();
        }

        [HttpPost]
        public async Task<IActionResult> CreateRoute([FromBody]RouteCreateModel model)
        {
            var routes = await _routeService.GetRoutes();

            Func<Guid?, int?> getRouteId = (id) =>
            {
                return routes.FirstOrDefault(p => p.Guid == id)?.RouteId;
            };

            tblRoute route = new tblRoute()
            {
                Path = model.Path,
                ParentRouteId = getRouteId(model.ParentRouteGuid)
            };

            await _routeService.CreateRoute(route);

            return Ok(new RouteModel()
            {
                Guid = route.Guid,
                Path = route.Path,
                ParentRouteGuid = model.ParentRouteGuid
            });
        }

        [Route("{guid}")]
        [HttpDelete]
        public async Task<IActionResult> RemoveRoute(Guid guid)
        {
            var route = await _routeService.GetByGuid(guid);
            var routes = await _routeService.GetRoutes();

            if (routes.Any(x => x.ParentRouteId == route.RouteId))
            {
                return BadRequest("Cant remove a route with children");
            }

            await _routeService.RemoveRoute(route);

            return Ok();
        }
    }
}
