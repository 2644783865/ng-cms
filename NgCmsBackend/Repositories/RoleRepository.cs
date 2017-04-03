using NgCmsBackend.Contexts;
using NgCmsBackend.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace NgCmsBackend.Repositories
{
    public class RoleRepository : GenericRepository<NgCmsContext, tblRole>
    {
        public RoleRepository()
        {
        }

        public RoleRepository(NgCmsContext dbContext)
        {
            DbContext = dbContext;
        }

        public async Task<tblRole> GetRoleByUserId(int userId)
        {
            var user = await DbContext.tblUser
                .Include(x => x.Role)
                .FirstOrDefaultAsync(x => x.UserId == userId);

            return user.Role;
        }
    }
}
