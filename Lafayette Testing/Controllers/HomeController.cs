using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

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

		public ActionResult SiteMap()
		{
			ViewBag.Message = "Your site map page.";

			return View();
		}

		public ActionResult PrivacyStatement()
		{
			ViewBag.Message = "Your privacy statement page.";

			return View();
		}

		public ActionResult UsageAgreement()
		{
			ViewBag.Message = "Your usage agreement page.";

			return View();
		}
	}
}
