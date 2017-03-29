using NgCmsBackend.Contexts;
using NgCmsBackend.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace NgCmsBackend.Repositories
{
    public class RouteRepository : GenericRepository<NgCmsContext, tblRoute>
    {
        public RouteRepository()
        {
        }

        public RouteRepository(NgCmsContext dbContext)
        {
            DbContext = dbContext;
        }
    }
}
