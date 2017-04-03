using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using NgCmsBackend.Entities;

namespace NgCmsBackend.Contexts
{
    public class NgCmsContext : DbContext
    {
        public NgCmsContext(DbContextOptions<NgCmsContext> options)
            : base(options)
        {
        }

        public DbSet<tblRoute> tblRoute { get; set; }
        public DbSet<tblUser> tblUser { get; set; }
        public DbSet<tblRole> tblRole { get; set; }

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

            modelBuilder.Entity<tblUser>()
                .Property(b => b.Created)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<tblUser>()
                .Property(b => b.Modified)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<tblUser>()
                .Property(b => b.Guid)
                .HasDefaultValueSql("newid()");

            modelBuilder.Entity<tblRole>()
                .Property(b => b.Created)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<tblRole>()
                .Property(b => b.Modified)
                .HasDefaultValueSql("getdate()");

            modelBuilder.Entity<tblRole>()
                .Property(b => b.Guid)
                .HasDefaultValueSql("newid()");
        }
    }
}
