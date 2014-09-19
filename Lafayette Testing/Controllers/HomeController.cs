using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Lafayette_Testing.Models;

namespace Lafayette_Testing.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

			return View();
		}

		public ActionResult About()
		{
			ViewBag.Message = "Your app description page.";

			return View();
		}

		public ActionResult Contact()
		{
			ViewBag.Message = "Your contact page.";

			return View();
		}

        [HttpPost]
	    public ActionResult Contact(ContactModel model)
	    {
	        return View();
	    }

		[ActionName("site-map")]
		public ActionResult DataLoggers(string cleanUrlName)
		{
			return View("SiteMap");
		}

		[ActionName("privacy-statement")]
		public ActionResult DataLoggers1(string cleanUrlName)
		{
			return View("PrivacyStatement");
		}

		[ActionName("usage-agreement")]
		public ActionResult DataLoggers2(string cleanUrlName)
		{
			return View("UsageAgreement");
		}

	}
}
