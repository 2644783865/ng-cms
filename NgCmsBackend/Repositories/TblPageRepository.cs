using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NgCmsBackend.DbContexts;

namespace NgCmsBackend.Repositories
{
    public class TblPageRepository : GenericRepository<BaseDbContext, tblPage>
    {
        public TblPageRepository()
        {
        }

        public TblPageRepository(BaseDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public List<spPageTree_Result> GetPageTree()
        {
            return DbContext.spPageTree().ToList();
        }

        public async Task<IList<tblContent>> GetContentByPageGuid(Guid guid)
        {
            return await DbContext.tblContent.Where(x => x.tblPage.Guid.Equals(guid)).ToListAsync();
        }
    }
}
