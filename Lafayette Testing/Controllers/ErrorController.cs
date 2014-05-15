using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lafayette_Testing.Controllers
{
    public class ErrorController : Controller
    {
        public ActionResult Index()
        {
            return Redirect("~/");
        }

        [ActionName("http-error")]
        public ActionResult HttpError()
        {
            return View("HttpError");
        }

        [ActionName("page-not-found")]
        public ActionResult PageNotFound()
        {
            return View("PageNotFound");
        }

        [ActionName("internal-server-error")]
        public ActionResult InternalServerError()
        {
            return View("InternalServerError");
        }
    }
}
