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
    [RoutePrefix("api/Page")]
    public class PageController : ApiController
    {
        private readonly PageService pageService = new PageService();
        private readonly ContentService contentService = new ContentService();

        public PageController()
        {
        }

        [Route("GetPagesWithContent")]
        [HttpGet]
        public async Task<IHttpActionResult> GetPagesWithContent()
        {
            var pageList = await pageService.GetPages();

            return Ok(new PageContentTreeModel()
            {
                Data = pageList.Select(x => new PageTreeModel()
                {
                    Data = new ContentTreeModel()
                    {
                        // Page as first node
                        Name = x.Path,
                        Guid = null,
                        Content = null
                    },
                    Children = x.tblContent.Select(y => new PageTreeModel()
                    {
                        Data = new ContentTreeModel()
                        {
                            Guid = y.Guid,
                            Name = y.Name,
                            Content = y.Content
                        },
                        Children = new List<PageTreeModel>()
                   }).ToList()
                   
               }).ToList()
            });
        }

        [AllowAnonymous]
        [Route("GetByPath")]
        [HttpPost]
        public async Task<IHttpActionResult> GetByPath(PathModel model)
        {
            var page = await pageService.GetPageByPath(model.Path);

            if (page == null)
            {
                page = new tblPage()
                {
                    Path = model.Path
                };

                await pageService.CreatePage(page);
            }

            return Ok(new PageModel()
            {
                Guid = page.Guid,
                Path = page.Path
            });
        }

        [Route("Create")]
        [HttpPost]
        public async Task<IHttpActionResult> CreatePage(PageCreateModel model)
        {
            tblPage page = new tblPage()
            {
                Path = model.Path
            };

            var foundPage = await pageService.GetPageByPath(model.Path);

            if (foundPage != null) {
                return BadRequest("Page already exists");
            }

            await pageService.CreatePage(page);   

            return Ok(new PageModel()
            {
                Guid = page.Guid,
                Path = page.Path
            });
        }
    }
}
