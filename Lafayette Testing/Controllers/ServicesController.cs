﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Lafayette_Testing.Views.Services
{
    public class ServicesController : Controller
    {
        //
        // GET: /Services/

        public ActionResult Index()
        {
            return View();
        }

		[ActionName("ultrasonics-testing")]
		public ActionResult DataLoggers2(string cleanUrlName)
		{
			return View("UltrasonicsTesting");
		}

    }
}
