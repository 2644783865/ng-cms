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
    [RoutePrefix("api/Content")]
    public class ContentController : ApiController
    {
        private readonly ContentService _contentService = new ContentService();

        public ContentController()
        {
        }

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

        [Route("Create")]
        [HttpPost]
        public async Task<IHttpActionResult> CreateContent(ContentCreateModel model)
        {
            tblContent content = new tblContent()
            {
                Name = model.Name,
                Content = model.Content
            };

            var foundContent = await _contentService.GetContentByName(model.Name);

            if (foundContent != null) {
                return BadRequest("Content already exists");
            }

            await _contentService.CreateContent(content);   

            return Ok(content.Guid);
        }

    }
}
