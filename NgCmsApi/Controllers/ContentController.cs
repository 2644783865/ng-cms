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
        private readonly ContentService contentService = new ContentService();
        private readonly PageService pageService = new PageService();

        public ContentController()
        {
        }

        [AllowAnonymous]
        [Route("GetByName/{name}")]
        [HttpGet]
        public async Task<ContentModel> GetByName(string name)
        {
            var content = await contentService.GetContentByName(name);

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
        [Route("GetByPage/{guid}")]
        [HttpGet]
        public async Task<IHttpActionResult> GetByPage(Guid guid)
        {
            var contentList = await contentService.GetContentByPageGuid(guid);

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
            tblPage page;

            foreach (var path in model)
            {
                page = await pageService.GetPageByPath(path);

                contentList.Concat(await contentService.GetContentByPageGuid(page.Guid));
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

            var foundPage = await pageService.GetPageByPath(model.Path);

            if (foundPage != null)
            {
                content.PageId = foundPage.PageId;
            }
            else
            {
                tblPage newPage = new tblPage()
                {
                    Path = model.Path
                };

                await pageService.CreatePage(newPage);

                content.PageId = newPage.PageId;
            }

            var foundContent = await contentService.GetContentByName(model.Name);

            if (foundContent != null)
            {
                return BadRequest("Content already exists");
            }

            await contentService.CreateContent(content);

            return Ok(content.Guid);
        }

        [Route("Update")]
        [HttpPost]
        public async Task<IHttpActionResult> UpdateContent(ContentUpdateModel model)
        {
            var content = await contentService.GetContentByGuid(model.Guid);

            content.Content = model.Content;

            await contentService.UpdateContent(content);

            return Ok();
        }

    }
}
