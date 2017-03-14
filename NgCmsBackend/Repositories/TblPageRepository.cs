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
    }
}
