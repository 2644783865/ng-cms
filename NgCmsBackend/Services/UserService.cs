using NgCmsBackend.Contexts;
using NgCmsBackend.Entities;
using NgCmsBackend.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NgCmsBackend.Services
{
    public class UserService
    {
        public void Dispose()
        {
        }

        private readonly NgCmsContext _dbContext;

        public UserService(NgCmsContext dbContext)
        {
            _dbContext = dbContext;
        }

        UserRepository _repo => new UserRepository(_dbContext);

        public async Task Create(tblUser user)
        {
            await _repo.Insert(user);
        }

        public async Task<tblUser> GetByName(string userName)
        {
            return await _repo.FindAsync(x => x.UserName.Equals(userName));
        }

        public async Task AddToRole(tblUser user, tblRole role)
        {
            await _repo.AddToRole(user, role);
        }
    }
}
