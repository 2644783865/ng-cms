using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace NgCmsBackend.Contexts
{
    public class NgCmsIdentityContext : IdentityDbContext
    {
        public NgCmsIdentityContext(DbContextOptions<NgCmsIdentityContext> options)
            : base(options)
        {
        }
    }
}
