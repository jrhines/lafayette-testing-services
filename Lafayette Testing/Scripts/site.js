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

	// trigger external links
	$('a[rel="external"]').on('click tap',function(){return window.open($(this).attr('href')),!1});

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
	$('.slider').flexslider({
		animation: 'slide',
		useCSS: false,
		multipleKeyboard: false,
		directionNav: false
	});

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

	// fancybox video
	if (isMobile) {
		$('.fancybox-video').on('click tap', function () { return window.open($(this).attr('href')), !1 });
	} else {
		$('.fancybox-video').attr('href', function () { return 'http://www.youtube.com/embed/' + youtube_parser($(this).attr('href')) + '?wmode=transparent&rel=0&autoplay=1'; }).fancybox({
			padding: 0,
			type: 'iframe',
			aspectRatio: true
		});
	}

});