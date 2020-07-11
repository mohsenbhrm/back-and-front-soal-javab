using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.DependencyInjection;
using System.IO;
using System.Threading.Tasks;
using System;

namespace SoalJavab.Services
{
    /// <summary>
    /// More info: http://www.dotnettips.info/post/2564
    /// </summary>
    public static class RazorViewToStringRendererExtensions
    {
        /// <summary>
        /// Adds IViewRendererService to IServiceCollection.
        /// </summary>
        public static IServiceCollection AddRazorViewRenderer(this IServiceCollection services)
        {
#if NETCOREAPP3_0 || NETCOREAPP3_1
            services.AddMvcCore().AddRazorViewEngine();
#endif
            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<IViewRendererService, ViewRendererService>();
            return services;
        }
    }

    /// <summary>
    /// More info: http://www.dotnettips.info/post/2564
    /// </summary>
    public interface IViewRendererService
    {
        /// <summary>
        /// Renders a .cshtml file as an string.
        /// </summary>
        Task<string> RenderViewToStringAsync(string viewNameOrPath);

        /// <summary>
        /// Renders a .cshtml file as an string.
        /// </summary>
        Task<string> RenderViewToStringAsync<TModel>(string viewNameOrPath, TModel model);
    }

    /// <summary>
    /// Modified version of: https://github.com/aspnet/Entropy/blob/dev/samples/Mvc.RenderViewToString/RazorViewToStringRenderer.cs
    /// </summary>
    public class ViewRendererService : IViewRendererService
    {
        private readonly IRazorViewEngine _viewEngine;
        private readonly ITempDataProvider _tempDataProvider;
        private readonly IServiceProvider _serviceProvider;
        private readonly IHttpContextAccessor _httpContextAccessor;

        /// <summary>
        /// Renders a .cshtml file as an string.
        /// </summary>
        public ViewRendererService(
                    IRazorViewEngine viewEngine,
                    ITempDataProvider tempDataProvider,
                    IServiceProvider serviceProvider,
                    IHttpContextAccessor httpContextAccessor)
        {
            _viewEngine = viewEngine;
            _tempDataProvider = tempDataProvider;
            _serviceProvider = serviceProvider;
            _httpContextAccessor = httpContextAccessor;
        }

        /// <summary>
        /// Renders a .cshtml file as an string.
        /// </summary>
        public Task<string> RenderViewToStringAsync(string viewNameOrPath)
        {
            return RenderViewToStringAsync(viewNameOrPath, string.Empty);
        }

        /// <summary>
        /// Renders a .cshtml file as an string.
        /// </summary>
        public async Task<string> RenderViewToStringAsync<TModel>(string viewNameOrPath, TModel model)
        {
            var actionContext = getActionContext();

            var viewEngineResult = _viewEngine.FindView(actionContext, viewNameOrPath, isMainPage: false);
            if (!viewEngineResult.Success)
            {
                viewEngineResult = _viewEngine.GetView("~/", viewNameOrPath, isMainPage: false);
                if (!viewEngineResult.Success)
                {
                    throw new FileNotFoundException($"Couldn't find '{viewNameOrPath}'");
                }
            }

            var view = viewEngineResult.View;
            using (var output = new StringWriter())
            {
                var viewDataDictionary = new ViewDataDictionary<TModel>(new EmptyModelMetadataProvider(), new ModelStateDictionary())
                {
                    Model = model
                };

                var viewContext = new ViewContext(
                    actionContext,
                    view,
                    viewDataDictionary,
                    new TempDataDictionary(actionContext.HttpContext, _tempDataProvider),
                    output,
                    new HtmlHelperOptions());
                await view.RenderAsync(viewContext);
                return output.ToString();
            }
        }

        private ActionContext getActionContext()
        {
            var httpContext = _httpContextAccessor?.HttpContext;
            if (httpContext != null)
            {
                return new ActionContext(httpContext, httpContext.GetRouteData(), new ActionDescriptor());
            }

            httpContext = new DefaultHttpContext { RequestServices = _serviceProvider };
            return new ActionContext(httpContext, new RouteData(), new ActionDescriptor());
        }
    }
}