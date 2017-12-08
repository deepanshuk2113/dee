
$(function(){
    "use strict";

/*
         * ----------------------------------------------------------------------------------------
         *  PRELOADER SITE
         * ----------------------------------------------------------------------------------------
         */
         $(window).on("load", function () {
            $('.preloader_go').hide();
        });



/*
         * ----------------------------------------------------------------------------------------
         *  ANIMATION SCREEN SITE
         * ----------------------------------------------------------------------------------------
         */

         $('.links_nav nav a[href="#home"]').on("click", function () {
         	$('.effect_go').removeClass('active');
         	$('.home').addClass('active');
         	$('.links_nav nav a').removeClass('active');
         	$(this).addClass('active');
         	$('.center_text_go').addClass('active')
            $('.home').removeClass('opacity_go');
         });
         $('.links_nav nav a[href="#profile"]').on("click", function () {
         	$('.effect_go,.center_text_go').removeClass('active');
         	$('.profile').addClass('active');
         	$('.links_nav nav a').removeClass('active');
         	$(this).addClass('active');
            $('.home').addClass('opacity_go');
         });
         $('.links_nav nav a[href="#resume"]').on("click", function () {
         	$('.effect_go,.center_text_go').removeClass('active');
         	$('.resume').addClass('active');
         	$('.links_nav nav a').removeClass('active');
         	$(this).addClass('active');
            $('.home').addClass('opacity_go');
         });
         $('.links_nav nav a[href="#portfolio"]').on("click", function () {
         	$('.effect_go,.center_text_go').removeClass('active');
         	$('.portfolio').addClass('active');
         	$('.links_nav nav a').removeClass('active');
         	$(this).addClass('active');
            $('.home').addClass('opacity_go');
         });
         $('.links_nav nav a[href="#contact"]').on("click", function () {
         	$('.effect_go,.center_text_go').removeClass('active');
         	$('.contact').addClass('active');
         	$('.links_nav nav a').removeClass('active');
         	$(this).addClass('active');
            $('.home').addClass('opacity_go');
         });


/*
         * ----------------------------------------------------------------------------------------
         *  ANIMATION IMAGE ON HOVER
         * ----------------------------------------------------------------------------------------
         */
		$('.tilt_effect_go').tilt({});




/*
         * ----------------------------------------------------------------------------------------
         *  SLIDER MY CLIENTS
         * ----------------------------------------------------------------------------------------
         */
         $('#my_clients_slider').owlCarousel({
            loop:true,
            margin:10,
            nav:false,
            dots:false,
            smartSpeed: 1050,
            loop:true,
            autoplay: 3000,
            autoplayTimeout: 3000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                    dots:true
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        });


/*
         * ----------------------------------------------------------------------------------------
         *  SLIDER TESTIMONIALS
         * ----------------------------------------------------------------------------------------
         */

         $('#testimonials').owlCarousel({
            loop:true,
            margin:10,
            loop:false,
            nav:false,
            dots:true,
            autoplay: 3000,
            autoplayTimeout: 3000,
            smartSpeed: 1050,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2
                }
            }
        });

/*
         * ----------------------------------------------------------------------------------------
         *  AUTO HEIGHT SLIDER
         * ----------------------------------------------------------------------------------------
         */
         $('#testimonials .item .context_text_go').matchHeight();


/*
         * ----------------------------------------------------------------------------------------
         *  FILTER WORK
         * ----------------------------------------------------------------------------------------
         */

          $('.grid').mixItUp();

  

/*
         * ----------------------------------------------------------------------------------------
         *  MAGNIFIC POPUP WORK IMAGE
         * ----------------------------------------------------------------------------------------
         */
         var magnifPopup = function () {
            $('.popup_work').magnificPopup({
                type: 'image',
                removalDelay: 300,
                mainClass: 'mfp-with-zoom',
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        };
        // Call the functions 
        magnifPopup();


/*
         * ----------------------------------------------------------------------------------------
         *  FILTER BUTTONS ACTIVE CLASS
         * ----------------------------------------------------------------------------------------
         */
         $('.styling_button_filter button').on("click", function () {
            $('.styling_button_filter button').removeClass('active');
            $(this).addClass('active');
         });


/*
         * ----------------------------------------------------------------------------------------
         *  MENU SHOW MOBILE
         * ----------------------------------------------------------------------------------------
         */
         $('.menu-icon').on("click", function () {
            $(this).toggleClass( "opened" );
            if ($(this).hasClass('opened')) {
                $('.styling_header,.my_site_main').addClass('act_go');
            } else {
                $('.styling_header,.my_site_main').removeClass('act_go');
            }
         });

/*
         * ----------------------------------------------------------------------------------------
         *  REMOVE EFFECT IMAGE TITLEEFFECT_GO
         * ----------------------------------------------------------------------------------------
         */
         if ($(window).width() < 770) {
            $('.links_nav nav a').on("click", function () {
                $('.styling_header,.my_site_main').removeClass('act_go');
                 $('.menu-icon').removeClass('opened');
                 if ($('#home').is(':visible')) {
                    $('.styling_menu_hambg').addClass('for_color_section');
                 }else{
                    $('.styling_menu_hambg').removeClass('for_color_section');
                 }
            });
            $('.links_nav nav a[href="#home"]').on("click", function () {
                    $('.styling_menu_hambg').removeClass('for_color_section');
            });
         }

/*
         * ----------------------------------------------------------------------------------------
         *  OVERFLOW ON CLICK MENU 
         * ----------------------------------------------------------------------------------------
         */

         $('.menu-icon,.links_nav nav a').on("click", function () {
            if ($(this).hasClass('opened')) {
                $('.profile, .portfolio, .resume, .contact').css('overflow-y', 'hidden')
            } else {
                $('.profile, .portfolio, .resume, .contact').css('overflow-y', 'auto')
            }
         });

/*
         * ----------------------------------------------------------------------------------------
         *  SCROLL ANIMATION SMALL 
         * ----------------------------------------------------------------------------------------
         */
            try {
                $.browserSelector();
                if($("html").hasClass("chrome")) {
                    $.smoothScroll();
                }
            } catch(err) {};


/*
         * ----------------------------------------------------------------------------------------
         *  FORM AJAX
         * ----------------------------------------------------------------------------------------
         */
         $("form").on("submit", function(e) {
            e.preventDefault();
            var form = $(this);
            var button = form.children("button[type='submit']");
            var msg = form.serialize();
            var submitButton = form.children("button[type='submit']").html();
            if (submitButton == undefined) {
                var idForm = form.attr("id");
                var button = $("#" + idForm + " button");
                var submitButton = $("#" + idForm + " button").html();
            }
            $.ajax({
                type: 'POST',
                url: "php/mail.php",
                data: msg,
                success: function(data) {
                    if (data != "") {
                        $("input, textarea").val("");
                        button.html(data).addClass("");
                        setTimeout(function() {
                            button.html(submitButton).removeClass("");
                        }, 5000);
                        $('.succes_form').addClass('active');
                        setTimeout(function () {
                            $('.succes_form').removeClass('active');
                        },2000);
                    }
                },
                error: function(xhr, str) {
                    alert('Error: ' + xhr.responseCode);
                }
            });
        });


});

