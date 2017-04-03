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

namespace NgCmsApi.Controllers
{
    [Route("api/Route")]
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
    }
}
