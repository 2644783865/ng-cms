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
    [RoutePrefix("api/Page")]
    public class PageController : ApiController
    {
        private readonly PageService _pageService = new PageService();

        public PageController()
        {
        }

        [AllowAnonymous]
        [Route("GetPagesWithChildren")]
        [HttpGet]
        public async Task<List<PageTreeModel>> GetPagesWithChildren()
        {
            var pageTree = _pageService.GetPageTree();
            var pages = await _pageService.GetPages();

            Func<int?, Guid?> getPageGuid = (id) =>
            {
                return pages.FirstOrDefault(p => p.PageId == id)?.Guid;
            };

            return pageTree.Select(p => new PageTreeModel()
            {
                Guid = p.Guid,
                Path = p.Path,
                ParentPageGuid = getPageGuid(p.ParentId),
                Generation = p.Generation
            }).ToList();
        }

        [AllowAnonymous]
        [Route("GetByPath")]
        [HttpPost]
        public async Task<IHttpActionResult> GetByPath(PathModel model)
        {
            var page = await _pageService.GetPageByPath(model.Path);

            if (page == null)
            {
                return BadRequest("Page not found");
            }

            return Ok(new PageModel()
            {
                Guid = page.Guid,
                Path = page.Path,
                ParentGuid = page.tblPage2.Guid
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

            var foundPage = await _pageService.GetPageByPath(model.Path);

            if (foundPage != null) {
                return BadRequest("Page already exists");
            }

            await _pageService.CreatePage(page);   

            return Ok(new PageModel()
            {
                Guid = page.Guid,
                Path = page.Path
            });
        }
    }
}
