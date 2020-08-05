using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using SoalJavab.DataLayer;

namespace SoalJavab.WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
          CreateWebHostBuilder(args).Build().Run();

        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
        WebHost.CreateDefaultBuilder(args)
         .UseKestrel()
           .UseContentRoot(Directory.GetCurrentDirectory())
           .UseUrls("http://localhost:5000", "http://192.168.1.50:5000")
           .UseKestrel()
           .UseIISIntegration()
            .UseStartup<Startup>();

    }
}
