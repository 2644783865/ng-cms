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
    public class PageService
    {
        public void Dispose()
        {
        }

        private readonly BaseDbContext _dbContext = BaseDbContext.Create();

        TblPageRepository PageRepo => new TblPageRepository(_dbContext);

        public async Task<IList<tblPage>> GetPages()
        {
            return await PageRepo.List();
        }

        public async Task<tblPage> GetPageByPath(string path)
        {
            return await PageRepo.FindAsync(x => x.Path.Equals(path));
        }

        public async Task CreatePage(tblPage page)
        {
            await PageRepo.Insert(page);
        }

        public async Task UpdatePage(tblPage page)
        {
            await PageRepo.Update(page);
        }
    }
}