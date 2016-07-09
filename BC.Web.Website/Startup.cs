using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BC.Web.Website.Startup))]
namespace BC.Web.Website
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
