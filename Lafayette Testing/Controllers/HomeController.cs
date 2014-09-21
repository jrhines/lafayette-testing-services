using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Lafayette_Testing.Models;
using Postal;

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
            dynamic email = new Email("Contact");
            email.To = ConfigurationManager.AppSettings["email:ContactToAddress"];
            email.From = ConfigurationManager.AppSettings["email:ContactFromAddress"];
            email.FirstName = model.FirstName;
            email.LastName = model.LastName;
            email.BusinessType = model.BusinessType;
            email.AddressLine1 = model.AddressLine1;
            email.AddressLine2 = model.AddressLine2;
            email.City = model.City;
            email.State = model.State;
            email.ZipCode = model.ZipCode;
            email.Country = model.Country == "Other" ? model.CountryName : model.Country;
            email.Phone = model.Phone;
            email.Email = model.Email;
            email.Comments = model.Comments;
            email.Send();

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
