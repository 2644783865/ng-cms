﻿using NgCmsBackend.Contexts;
using NgCmsBackend.Entities;
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

        private readonly NgCmsContext _dbContext;

        public RouteService(NgCmsContext dbContext)
        {
            _dbContext = dbContext;
        }

        RouteRepository _repo => new RouteRepository(_dbContext);

        public async Task<IList<tblRoute>> GetRoutes()
        {
            return await _repo.List();
        }

        public async Task<tblRoute> GetByGuid(Guid guid)
        {
            return await _repo.FindAsync(x => x.Guid == guid);
        }

        public async Task CreateRoute(tblRoute route)
        {
            await _repo.Insert(route);
        }

        public async Task RemoveRoute(tblRoute route)
        {
            await _repo.Delete(route);
        }

    }
}
