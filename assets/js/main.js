$(document).ready(function() {
	
	 "use strict";

    // Navigation Bar
    var nav = $('nav');
    var navHeight = nav.outerHeight();

    // Page Loader
    $(window).on('load', function() {
        $('#preloader').delay(3000).hide();
    });

    // Display loader for every link click
    $('.nav-item').on("click", function () {
        $('#preloader').show().delay(400).queue(function(n) {
            $(this).hide(); n();
          });
    });

    // Back to top icon scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#iconDown').fadeOut('fast');
            $('#iconTop').fadeIn('slow');
        } else {
            $('#iconTop').fadeOut('fast');
            $('#iconDown').fadeIn('slow');
        }
    });

    // Back to top icon click
    $('#iconTop').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    // Back to top icon click
    $('#iconDown').click(function() {
        $('html, body').animate({
            scrollTop: 552
        }, 800);
        return false;
    });

    // Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
    });
    
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: navHeight
    });

    // Navbar Menu Reduce
    $(window).trigger('scroll');
    $(window).on('scroll', function() {
        var pixels = 50;
        if($('.about-mf').hasClass('sect-pt4')){
            if ($(window).scrollTop() > pixels) {
                $('.navbar-expand-md').addClass('navbar-reduce');
                $('.navbar-expand-md').removeClass('navbar-trans');
            } else {
                $('.navbar-expand-md').addClass('navbar-trans');
                $('.navbar-expand-md').removeClass('navbar-reduce');
            }
        }
    });

    // Header Fix
    $('.nav-header').on("click", function () {
        $('.navbar-expand-md').addClass('navbar-reduce');
        $('.navbar-expand-md').removeClass('navbar-trans');
    });

    $('.nav-home').on("click", function () {
        $('.navbar-expand-md').addClass('navbar-trans');
        $('.navbar-expand-md').removeClass('navbar-reduce');
    });
    
    if($('.about-mf').hasClass('sect-pt4')){
        $('.navbar-expand-md').addClass('navbar-trans');
        $('.navbar-expand-md').removeClass('navbar-reduce');
    } else{
        $('.navbar-expand-md').addClass('navbar-reduce');
        $('.navbar-expand-md').removeClass('navbar-trans');
    }
    
    $('#iconDown').fadeIn('slow');

});