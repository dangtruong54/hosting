/**
 * init_header
 * menu
 * owlcarousel brand
 */

;(function($) {

    'use strict'

    var init_header = function() {
        var largeScreen = matchMedia('only screen and (min-width: 992px)').matches;
        if( largeScreen ) {
            if( $().sticky ) {
                $('header.header-sticky').sticky();
            }
        }
    };

    //Menu
    var ResponsiveMenu =  {
        menuType: 'desktop',
        initial: function(winWidth) {
            ResponsiveMenu.menuWidthDetect(winWidth);
            ResponsiveMenu.menuBtnClick();
            ResponsiveMenu.parentMenuClick();
        },
        menuWidthDetect: function(winWidth) {
            var currMenuType = 'desktop';
            if (matchMedia('only screen and (max-width: 991px)').matches) {
                currMenuType = 'mobile';
            }
            if ( currMenuType !== ResponsiveMenu.menuType ) {
                ResponsiveMenu.menuType = currMenuType;
                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    $('#header').find('.header-wrap').after($mobileMenu);
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
                    $desktopMenu.find('.sub-menu').removeAttr('style');
                    $('#header').find('.btn-menu').after($desktopMenu);
                    $('.btn-submenu').remove();
                }
            } // clone and insert menu
        },
        menuBtnClick: function() {
            $('.btn-menu').on('click', function() {
                $('#mainnav-mobi').slideToggle(300);
                $(this).toggleClass('active');
            });
        }, // click on moblie button
        parentMenuClick: function() {
            $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
                if ( $(this).has('ul') ) {
                    e.stopImmediatePropagation()
                    $(this).next('ul').slideToggle(300);
                    $(this).toggleClass('active');
                }
            });
        } // click on sub-menu button
    };

    //owlcarousel slider in banner
    var owl = function(){
        //slider in banner
        var owl1 = $(".th-slider-container");
        owl1.addClass('owl-carousel');
        owl1.owlCarousel({
            items : 1,
            autoplay: true,
            responsiveClass:true,
            dots: false,
            nav: true,
            //pagination: true,
            lazyLoad: true,
            navText: ["<i class='fa fa-angle-left'>","<i class='fa fa-angle-right'>"],
            responsive : {
                0 : {
                    nav: false
                },
                768 : {
                    nav: true
                }
            }
        });

        //Offer in Home page
        var owl2 = $(".info-offer-list");
        owl2.addClass('owl-carousel');
        owl2.owlCarousel({
            items : 3,
            autoplay: true,
            responsiveClass:true,
            dots: true,
            lazyLoad: true,
            responsive : {
                0 : {
                    items : 1
                },
                768 : {
                    items : 3
                }
            }
        });

        //Testimonial" - Home
        var testimonial_home = $(".content-reply-container");

        testimonial_home.owlCarousel({
            items : 1,
            autoplay: true,
            responsiveClass:true
        });


        //SLIDER "CLIENT PARTNER" - Home
        var owl3 = $(".client-partner-wapper");
        owl3.owlCarousel({

            autoplay: true,
            responsiveClass:true,
            lazyLoad: true,
            responsive : {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                991: {
                    items: 6
                }
            }
        });
        
        //SLIDER "Custom reply" - About us
        var owl31 = $(".list-custom-comment");
        owl31.addClass('owl-carousel owl-theme');
        owl31.owlCarousel({
            items : 1,
            responsiveClass:true,
            dots: true,
            nav: false,

            lazyLoad: true
        });
        
        //SLIDER "List question" - Pricing v1
        var owl32 = $(".faq-question-list");
        owl32.owlCarousel({
            items : 1,
            dots: true,
            lazyLoad: true
        });
        

    }

    function tab_feature_home(){
        $('#tabs-popular-feature').tabs({
            show: { effect: "fade", duration: 200 },
            hide: 'fade'
        });
        $('#introduce-tabs').tabs({
            show: { effect: "fade", duration: 200 },
            hide: 'fade'
        });
    }

    //search form in header homepage
    function search_home_page(){
        $('.header .icon-search .fa-search').on('click', function(){
            $('header').toggleClass('active-search-form');
            $('.header.active-search-form input').focus();
        });
        $('.header .icon-search .fa-remove').on('click', function(){
            $('header').toggleClass('active-search-form');
            $('.header.active-search-form input').focus();
        })
    }

    function hover_cart_header(){
        $('.icon-shop').hover(function() {

            $(this).find('.cart-dd').stop(true, true).delay(200).fadeIn(500);
        }, function() {
            $(this).find('.cart-dd').stop(true, true).delay(200).fadeOut(500);
        });
    }

    function number_animation(){
        $('.number-total span.count').counterUp({
            delay: 10, // the delay time in ms
            time: 1500 // the speed time in ms
        });
    }
    // Dom Ready
    $(function() {
        init_header();
        owl();
        tab_feature_home();
        number_animation();
        search_home_page();
        hover_cart_header();
        ResponsiveMenu.initial($(window).width());
        $(window).resize(function() {
            ResponsiveMenu.menuWidthDetect($(this).width());
        });
    });

})(jQuery);