using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NgCmsBackend.DbContexts;

namespace NgCmsBackend.Repositories
{
    public class TblRoleRepository : GenericRepository<BaseDbContext, tblRole>
    {
        public TblRoleRepository()
        {
        }

        public TblRoleRepository(BaseDbContext dbContext)
        {
            DbContext = dbContext;
        }
    }
}
