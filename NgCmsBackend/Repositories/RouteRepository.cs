using NgCmsBackend.Contexts;
using NgCmsBackend.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NgCmsBackend.Repositories
{
    public class RouteRepository : GenericRepository<BaseContext, Route>
    {
        public RouteRepository()
        {
        }

        public RouteRepository(BaseContext dbContext)
        {
            DbContext = dbContext;
        }
    }
}
