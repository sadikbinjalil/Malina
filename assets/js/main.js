(function($){
	"use strict";
    jQuery(document).ready(function () {
        jQuery('.main-menu').meanmenu();
    });
	// PRELOADER JS CODE
    jQuery(window).on('load',function(){
        jQuery(".loader-box").fadeOut(500);
    });
    // END PRELOADER JS CODE
	
	$(document).on('ready', function(){
		
		// START MENU JS CODE
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) {
				$('.main-menu-area').addClass('menu-shrink animated slideInDown');
			} else {
				$('.main-menu-area').removeClass('menu-shrink animated slideInUp');
			}
		});	
		
		$('.navbar-nav li a').on('click', function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
        });
		
		$(document).on('click','.navbar-collapse.in',function(e) {
			if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
				$(this).collapse('hide');
			}
        });
		
		$('.navbar-nav>li>a').on('click', function(){
			$('.navbar-collapse').collapse('hide');
        });

        $('.cd-primary-nav li a').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
        // END MENU JS CODE

        // START SLIDE MENU JS CODE
        var isLateralNavAnimating = false;
	
        //open/close lateral navigation
        $('.cd-nav-trigger').on('click', function(event){
            event.preventDefault();
            //stop if nav animation is running 
            if( !isLateralNavAnimating ) {
                if($(this).parents('.csstransitions').length > 0 ) isLateralNavAnimating = true; 
                
                $('body').toggleClass('navigation-is-open');
                $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                    //animation is over
                    isLateralNavAnimating = false;
                });
            }
        });
        // END SLIDE MENU JS CODE  

        // START TEXTTYP JS CODE
		var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }

            setTimeout(function() {
            that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };
        // END TEXTTYP JS CODE

        // START SKILLBAR JS CODE
        jQuery('.skillbar').each(function() {
            jQuery(this).find('.skillbar-bar').animate({ width: jQuery(this).attr('data-percent') }, 3000);
        });
        // END SKILLBAR JS CODE
        
        //COUNTER JS CODE
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
        //END COUNTER JS CODE

        
		// POPPUP GALLERY JS CODE
		$('.popup-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
		}); 
		// END POPPUP GALLERY JS CODE
		
		// MIXITUP JS CODE
		$('#shorting, .s-container').mixItUp();
		// END MIXITUP JS CODE
        
        // START TESTIMONIAL SLIDER JS CODE
        $('carousel-item').owlCarousel({
            items:1,
            autoplay:true,
            autoplayHoverPause: true,
            dots:true ,
            autoplay:true,
            loop:true,
            nav:false,
        });
        // END TESTIMONIAL SLIDER JS CODE

        // START FOOTER MENU JS CODE
        $('.footer-menu li a').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
        // START FOOTER MENU JS CODE
        
		// TOP BUTTON JS CODE
		$('body').append('<div id="toTop" class="top-arrow"><i class="icofont-swoosh-up"></i></div>');
		$(window).on('scroll', function () {
			if ($(this).scrollTop() != 0) {
				$('#toTop').fadeIn();
			} else {
			$('#toTop').fadeOut();
			}
		}); 
		$('#toTop').on('click', function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		// END TOP BUTTON JS CODE
	});
	
    
}(jQuery));