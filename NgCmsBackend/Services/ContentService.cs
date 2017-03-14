using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using NgCmsBackend.Repositories;
using System.Web;
using NgCmsBackend.DbContexts;

namespace NgCmsBackend.Services
{
    public class ContentService
    {
        public void Dispose()
        {
        }

        private readonly BaseDbContext _dbContext = BaseDbContext.Create();

        TblContentRepository ContentRepo => new TblContentRepository(_dbContext);

        public async Task<IList<tblContent>> GetContentByPageGuid(Guid guid)
        {
            return await ContentRepo.GetContentByPageGuid(guid);
        }

        public async Task<tblContent> GetContentByName(string name)
        {
            return await ContentRepo.FindAsync(x => x.Name.Equals(name));
        }

        public async Task<tblContent> GetContentByGuid(Guid guid)
        {
            return await ContentRepo.FindAsync(x => x.Guid.Equals(guid));
        }

        public async Task CreateContent(tblContent content)
        {
            await ContentRepo.Insert(content);
        }

        public async Task UpdateContent(tblContent content)
        {
            await ContentRepo.Update(content);
        }
    }
}