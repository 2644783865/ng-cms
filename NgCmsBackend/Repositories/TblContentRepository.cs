using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NgCmsBackend.DbContexts;

namespace NgCmsBackend.Repositories
{
    public class TblContentRepository : GenericRepository<BaseDbContext, tblContent>
    {
        public TblContentRepository()
        {
        }

        public TblContentRepository(BaseDbContext dbContext)
        {
            DbContext = dbContext;
        }
    }
}
