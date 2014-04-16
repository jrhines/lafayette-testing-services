// mobile detection
var isMobile = navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad|android|blackberry|opera mini|iemobile|kindle|silk|mobile)/);

// youtube id parser
function youtube_parser (url) {
	var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
	var match = url.match(regExp);
	if (match && match[2].length == 11) {
		return match[2];
	} else {
		return url;
	}
}

// scrollTo (used for footer nav)
$.fn.scrollTo = function(target, options, callback){
	if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
		var settings = $.extend({
			scrollTarget: target,
			offsetTop: 50,
			duration: 500,
			easing: 'swing'
		}, options);
		return this.each(function(){
			var scrollPane = $(this);
			var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
			var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
			scrollPane.animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
			if (typeof callback == 'function') { callback.call(this); }
		});
	});
}

$(function () {

	// disable tel links on non-touch devices
	$('.no-touch a[href^="tel:"]').on('click tap', function (e) {
		e.preventDefault();
	});

	// toggle navigation
	if ($('#nav-toggle').data('toggle') == "collapse") {
		$('#nav-toggle').on('click tap', function () {
			$($(this).data('target')).slideToggle('fast', function () {
				$(this).toggleClass('collapsed');
			});
		});
	} else if ($('#nav-toggle').data('toggle') == "flyout") {
		$('body').addClass('flyout-nav').append('<nav id="flyout-nav" class="show-for-sm"></nav>');
		$($('#nav-toggle').data('target')).find('ul').clone().prependTo('#flyout-nav');
		$('#flyout-nav ul').find('li').each(function () {
			$(this).attr('id','');
		});
		$('#nav-toggle').on('click tap', function () {
			$('body').toggleClass('show-nav');
		});
	} else if ($('#nav-toggle').data('toggle') == "footer") {
		$('#site-footer').prepend('<nav id="footer-site-nav" class="show-for-sm"></nav>');
		$($('#nav-toggle').data('target')).find('ul').clone().appendTo('#footer-site-nav');
		$('#footer-site-nav ul').find('li').each(function () {
			$(this).attr('id','');
		});
		$('#nav-toggle').on('click tap', function () {
			$('body').scrollTo('#footer-site-nav');
		});
	}

	// dropdown menu functionality
	$('.dropdown-toggle').on('click tap', function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('active');
	});

	// hide the menu if the user clicks outside of the dropdown area
	$('#container').click(function(event) {
		if($(event.target).parents().index($('.nav')) == -1) {
			$('.nav-item').removeClass('active');
		}
	});
	
	// slider
	//$('.slider').flexslider({
		//animation: 'slide',
		//useCSS: false,
		//multipleKeyboard: false,
		//directionNav: false
	//});

	// tabs
	$('.tabs-horizontal').easyResponsiveTabs({
		type: 'default', // Types: default, vertical, accordion           
		width: 'auto', // auto or any custom width
		fit: true, // 100% fits in a container
		closed: 'accordion' // Close the panels on start, the options 'accordion' and 'tabs' keep them closed in there respective view types
	});

	$('.tabs-vertical').easyResponsiveTabs({
		type: 'vertical',
		width: 'auto',
		fit: true,
		closed: 'accordion'
	});

	// add "*" to required field labels
	$('[required]').each(function () {
		$(this).parent().find('label').append(' <span class="required">*</span>');
	});

	// fancybox modal
	$(".fancybox").fancybox({
		openEffect: 'none',
		closeEffect: 'none'
	});

	// fancybox video
	//if (isMobile) {
		//$('.fancybox-video').on('click tap', function () { return window.open($(this).attr('href')), !1 });
	//} else {
		//$('.fancybox-video').attr('href', function () { return 'http://www.youtube.com/embed/' + youtube_parser($(this).attr('href')) + '?wmode=transparent&rel=0&autoplay=1'; }).fancybox({
			//padding: 0,
			//type: 'iframe',
			//aspectRatio: true
		//});
	//}

	// contact form set initial focus on first text input
	$("#contactForm #firstName").focus();

	// run jquery validate on contact form
	//jQuery.validator.setDefaults({
		//debug: true,
		//success: "valid"
	//});

	$("#contactForm").validate({
		errorPlacement: function (error, element) {
			error.insertAfter(element).addClass('input-validation-msg');
		},
		rules: {
			firstName: "required",
			lastName: "required",
			phone: {
				required: true,
				phoneUS: true
			},
			email: {
				required: true,
				email: true
			},
			
		},
		messages: {
			firstName: "Please enter your First Name.",
			lastName: "Please enter your Last Name.",
			phone: {
				required: "Please enter a Phone Number.",
				phoneUS: "Please enter a valid 10-digit Phone Number."
			},
			email: "Please enter a valid Email address."
		},
		invalidHandler: function (form, validator) {
			var errors = validator.numberOfInvalids();
			if (errors) {
				$("#error-message").show();
				if (errors === 1) {
					$("#error-message p").text("Errors in 1 field have occured. Please resolve the issue above.");
				} else {
					$("#error-message p").text("Errors in " + errors + " fields have occured. Please resolve the issues above.");
				}
			} else {
				$("#error-message").hide();
			}
		}
	});


	// home page text fading
	var i = 0;
	function iteratelist() {
		var list = $("ul.fade li");
		list.eq(i).delay(1000).fadeIn(2000).fadeOut(2000, function () {
			i++;
			if (i % list.length == 0) {
				i = 0;
			}
			iteratelist();
		});
	}
	iteratelist();

	// home page random image and text
	(function ($) {

		$.randomImage = {
			defaults: {

				path: "/Content/images/",
				myImages: [{
					src: "liquid-penetrant-test.png",
					title: "Penetrant Inspection Linear Indications"
				},
				{
					src: "wet-fluorescent-magnetic-test.png",
					title: "Wet Fluorescent Magnetic Particle Inspection Linear Indication"
				},
				{
					src: "dry-powder-test.png",
					title: "Dry Powder Magnetic Particle Linear Indication"
				},
				{
					src: "digital-x-ray-test.png",
					title: "Digital X-Ray Cavity Shrink Indication"
				}
				]
			}
		}

		$.fn.extend({
			randomImage: function (config) {
				var config = $.extend({}, $.randomImage.defaults, config);

				return this.each(function () {
					var imageNames = config.myImages;
					var imageNamesSize = imageNames.length;
					var lotteryNumber = Math.floor(Math.random() * imageNamesSize);
					var winnerImage = imageNames[lotteryNumber].src;
					this.title = config.myImages[lotteryNumber].title;
					$(this).after("<small id='random-caption'>" + this.title + "</small>");
					var fullPath = config.path + winnerImage;

					$(this).attr({
						src: fullPath,
						alt: this.title
					});
				});
			}
		});
	})(jQuery);

	$("#random-banner").randomImage();

});