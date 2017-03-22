using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using NgCmsBackend.Repositories;
using System.Web;
using NgCmsBackend.DbContexts;

namespace NgCmsBackend.Services
{
    public class RouteService
    {
        public void Dispose()
        {
        }

        private readonly BaseDbContext _dbContext = BaseDbContext.Create();

        TblRouteRepository RouteRepo => new TblRouteRepository(_dbContext);

        public async Task<IList<tblRoute>> GetRoutes()
        {
            return await RouteRepo.List();
        }

        public List<spRouteTree_Result> GetRouteTree()
        {
            return RouteRepo.GetRouteTree();
        }

        public async Task<tblRoute> GetRouteByPath(string path)
        {
            return await RouteRepo.FindAsync(x => x.Path.Equals(path));
        }

        public async Task CreateRoute(tblRoute route)
        {
            await RouteRepo.Insert(route);
        }

        public async Task UpdateRoute(tblRoute route)
        {
            await RouteRepo.Update(route);
        }
    }
}