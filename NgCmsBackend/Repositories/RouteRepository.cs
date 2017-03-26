using NgCmsBackend.Contexts;
using System;
using System.Collections.Generic;
using System.Text;

namespace NgCmsBackend.Repositories
{
    public class RouteRepository : GenericRepository<NgCmsMainContext, Route>
    {
        public RouteRepository()
        {
        }

        public RouteRepository(NgCmsMainContext dbContext)
        {
            DbContext = dbContext;
        }
    }
}
