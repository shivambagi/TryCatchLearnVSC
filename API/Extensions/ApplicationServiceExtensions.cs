using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Models.Data;
using Services.Interfaces;
using Services.Services;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions //class needs to be static
    {
        //method needs to be static
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
        {
            services.AddDbContext<DataContext>(options => {
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });

            services.AddScoped<ITokenService,TokenService>();

            return services;
        }
    }
}