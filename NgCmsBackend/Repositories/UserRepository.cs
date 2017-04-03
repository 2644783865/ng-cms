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
    public class UserRepository : GenericRepository<NgCmsContext, tblUser>
    {
        public UserRepository()
        {
        }

        public UserRepository(NgCmsContext dbContext)
        {
            DbContext = dbContext;
        }

        public async Task<tblUser> AddToRole(tblUser user, tblRole role)
        {
            user.RoleId = role.RoleId;

            return await Update(user);
        }
    }
}
