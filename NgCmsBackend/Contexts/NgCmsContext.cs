using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using NgCmsBackend.Entities;

namespace NgCmsBackend.Contexts
{
    public class NgCmsContext : IdentityDbContext
    {
        public NgCmsContext(DbContextOptions<NgCmsContext> options)
            : base(options)
        {
        }

        public DbSet<tblRoute> tblRoute { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<tblRoute>()
                .Property(b => b.Created)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<tblRoute>()
                .Property(b => b.Modified)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<tblRoute>()
                .Property(b => b.Guid)
                .HasDefaultValueSql("newid()");
        }
    }
}
