using NgCmsBackend.Contexts;
using NgCmsBackend.Repositories;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NgCmsBackend.Services
{
    public class RouteService
    {
        public void Dispose()
        {
        }

        private NgCmsMainContext _dbContext;

        public RouteService(NgCmsMainContext dbContext)
        {
            _dbContext = dbContext;
        }
        RouteRepository _repo => new RouteRepository(_dbContext);

        public async Task<IList<Route>> GetRoutes()
        {
            return await _repo.List();
        }

    }
}
