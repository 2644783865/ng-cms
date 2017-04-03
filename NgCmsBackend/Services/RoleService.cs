using NgCmsBackend.Contexts;
using NgCmsBackend.Entities;
using NgCmsBackend.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NgCmsBackend.Services
{
    public class RoleService
    {
        public void Dispose()
        {
        }

        private readonly NgCmsContext _dbContext;

        public RoleService(NgCmsContext dbContext)
        {
            _dbContext = dbContext;
        }

        RoleRepository _repo => new RoleRepository(_dbContext);

        public async Task<tblRole> GetRoleById(int roleId)
        {
            return await _repo.FindAsync(x => x.RoleId == roleId);
        }

        public async Task<tblRole> GetRoleByUserId(int userId)
        {
            return await _repo.GetRoleByUserId(userId);
        }
    }
}
