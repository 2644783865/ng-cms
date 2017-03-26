using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using NgCmsBackend.Entities;

namespace NgCmsBackend.Contexts
{
    // Base context used for both identity and your own db
    public class BaseContext : IdentityDbContext
    {
        public BaseContext(DbContextOptions<BaseContext> options)
            : base(options)
        {
        }

        public DbSet<Route> Routes { get; set; }
    }
}
