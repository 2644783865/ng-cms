using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using NgCmsBackend.Contexts;
using Microsoft.AspNetCore.Identity;

namespace NgCmsApi
{
    public partial class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();      
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();

            var connectionString = @"Server=localhost;Database=NgCms;Trusted_Connection=true";

            // Set up migrations
            services.AddDbContext<NgCmsIdentityContext>(x => x.UseSqlServer(connectionString)); // Add o => o.MigrationsAssembly("NgCmsBackend") in case of code-first
            services.AddDbContext<NgCmsMainContext>(x => x.UseSqlServer(connectionString));
           
            // Add identity to the scope
            services.AddIdentity<IdentityUser, IdentityRole>()
                .AddEntityFrameworkStores<NgCmsIdentityContext>()
                .AddDefaultTokenProviders();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseMvc();
            ConfigureAuth(app);
            app.UseIdentity();
        }
    }
}
