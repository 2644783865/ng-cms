using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NgCmsBackend.DbContexts;

namespace NgCmsBackend.Repositories
{
    public class TblRouteRepository : GenericRepository<BaseDbContext, tblRoute>
    {
        public TblRouteRepository()
        {
        }

        public TblRouteRepository(BaseDbContext dbContext)
        {
            DbContext = dbContext;
        }

        public List<spRouteTree_Result> GetRouteTree()
        {
            return DbContext.spRouteTree().ToList();
        }

        public async Task<IList<tblContent>> GetContentByRouteGuid(Guid guid)    
        {
            return await DbContext.tblContent.Where(x => x.tblRoute.Guid.Equals(guid)).ToListAsync();
        }
    }
}
