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
    [RoutePrefix("api/Content")]
    public class ContentController : ApiController
    {
        private readonly ContentService _contentService = new ContentService();
        private readonly RouteService _routeService = new RouteService();

        public ContentController()
        {
        }

        [AllowAnonymous]
        [Route("GetByName/{name}")]
        [HttpGet]
        public async Task<ContentModel> GetByName(string name)
        {
            var content = await _contentService.GetContentByName(name);

            if (content == null)
            {
                return null;
            }

            return new ContentModel()
            {
                Guid = content.Guid,
                Name = content.Name,
                Content = content.Content
            };
        }

        [AllowAnonymous]
        [Route("GetByGuid/{guid}")]
        [HttpGet]
        public async Task<ContentModel> GetByGuid(Guid guid)
        {
            var content = await _contentService.GetContentByGuid(guid);

            if (content == null)
            {
                return null;
            }

            return new ContentModel()
            {
                Guid = content.Guid,
                Name = content.Name,
                Content = content.Content
            };
        }

        [AllowAnonymous]
        [Route("GetByRoute/{guid}")]
        [HttpGet]
        public async Task<IHttpActionResult> GetByRoute(Guid guid)
        {
            var contentList = await _contentService.GetContentByRouteGuid(guid);

            return Ok(contentList.Select(c => new ContentModel()
            {
                Guid = c.Guid,
                Name = c.Name,
                Content = c.Content
            }).ToList());
        }

        [AllowAnonymous]
        [Route("GetByPaths")]
        [HttpPost]
        public async Task<IHttpActionResult> GetByPaths(string[] model)
        {
            var contentList = new List<tblContent>();
            tblRoute route;

            foreach (var path in model)
            {
                route = await _routeService.GetRouteByPath(path);

                contentList.Concat(await _contentService.GetContentByRouteGuid(route.Guid));
            }

            return Ok(
                contentList.Select(c => new ContentModel()
                {
                    Guid = c.Guid,
                    Name = c.Name,
                    Content = c.Content
                }).ToList());
        }

        [Route("Create")]
        [HttpPost]
        public async Task<IHttpActionResult> CreateContent(ContentCreateModel model)
        {
            tblContent content = new tblContent()
            {
                Name = model.Name,
                Content = model.Content
            };

            var foundRoute = await _routeService.GetRouteByPath(model.Path);

            if (foundRoute != null)
            {
                content.RouteId = foundRoute.RouteId;
            }
            else
            {
                tblRoute newRoute = new tblRoute()
                {
                    Path = model.Path
                };

                await _routeService.CreateRoute(newRoute);

                content.RouteId = newRoute.RouteId;
            }

            var foundContent = await _contentService.GetContentByName(model.Name);

            if (foundContent != null)
            {
                return BadRequest("Content already exists");
            }

            await _contentService.CreateContent(content);

            return Ok(content.Guid);
        }

        [Route("Update")]
        [HttpPost]
        public async Task<IHttpActionResult> UpdateContent(ContentUpdateModel model)
        {
            var content = await _contentService.GetContentByGuid(model.Guid);

            content.Content = model.Content;

            await _contentService.UpdateContent(content);

            return Ok();
        }

    }
}
