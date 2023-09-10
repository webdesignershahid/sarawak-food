(function ($) {
    "use strict";

    var hotel_sarawak_food = {
        
        /* ============================================================ */
        /* PRELOADER
        /* ============================================================ */
        preloader: function(){
            $(window).on('load', function() {
                $(".preloader").fadeOut();     
            });
        },

        /* ============================================================ */
        /* Random
        /* ============================================================ */
        commonActivation: function(){    
            $(".price_slider").slider({
                range: true,
                min: 0,
                max: 1000,
                values: [70, 500],
                slide: function(event, ui) {
                    $("#amount").val("RM " + ui.values[0] + " - RM " + ui.values[1]);
                }
            });


            function iformat(icon) {
                var originalOption = icon.element;
                return $('<span><i class="fi ' + $(originalOption).data('icon') + '"></i> ' + icon.text + '</span>');
            }
            $('.select2').select2({
                width: "100%",
                templateSelection: iformat,
                templateResult: iformat,
                allowHtml: true
            });

            function formatState (opt) {
            
                var optimage = $(opt.element).attr('data-image'); 
                console.log(optimage)
                if(!optimage){
                   return opt.text.toUpperCase();
                } else {                    
                    var $opt = $(
                       '<span><img src="' + optimage + '" width="20px" /> ' + opt.text.toUpperCase() + '</span>'
                    );
                    return $opt;
                }
            };
            
            $('.js-example-basic-multiple').select2({
                width: "100%",
                templateResult: formatState,
                templateSelection: formatState
            });

            // Activated Tooltip everywhere
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
                return new bootstrap.Tooltip(tooltipTriggerEl)
            })
        },

        /* ============================================================ */
        /* Swiper Slider Integration
        /* ============================================================ */
        swiperCarousel: function(){
            var swiperSlider = $('.swiper');
            if (swiperSlider.length) {
                // Hero Slider
                var hero = new Swiper('.hero-slider', {                
                    slidesPerView: 1,
                    loop: true,  
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    },      
                });

                // Food Category Index
                var foodCategory = new Swiper('.food-category-slider', {                
                    slidesPerView: 2,
                    spaceBetween: 10,
                    loop: true,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }, 
                    breakpoints: {
                       425: {
                          slidesPerView: 3,
                        },
                        768: {
                          slidesPerView: 5,
                        },
                        992: {
                          slidesPerView: 6,
                        },
                        1170: {
                          slidesPerView: 7,
                        },
                    },        
                });

                var swiperthumb = new Swiper(".product-thumbnail", {
                    slidesPerView: 4,
                    // freeMode: true,
                    loop: true, 
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                    breakpoints: {
                        768: {
                            direction: "vertical",
                            spaceBetween: 5,
                        },
                        1400: {
                            direction: "vertical",
                            spaceBetween: 20,
                        },
                    }
                });
                var swiper2 = new Swiper(".product-images", {
                    lidesPerView: 1,  
                    // direction: 'vertical',
                    // freeMode: true,    
                    thumbs: {
                        swiper: swiperthumb,
                    },
                });
            }
        },

        /* ============================================================ */
        /* Mobile Menu Intigration
        /* ============================================================ */
        mobile_menu: function() {
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                // $(document).on('click', function(e) {
                //     var selectorType = $(actionSelector).add(mobile_menu);
                //     if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                //         $(actionSelector).removeClass("is-menu-open");
                //         $(selector).removeClass("is-menu-open");
                //     }          
                // });
            
            };
            mobile_menu('.nav-togglers, .close-menu', '.mobile-menu');

            // $('.mobile-menu ul li.item-has-submenu > a').on('click', function() {
            //     $('.mobile-menu ul li.item-has-submenu .submenu').each(function() { 
            //         if($(this).is(":visible")) { 
            //             $(this).slideUp(); 
            //         }
            //     }); 
            //     if($(this).parent('li').children('.submenu').length) {
            //         if(!$(this).parent('li').children('.submenu').is(":visible")) { 
            //             $(this).parent('li').children('.submenu').slideToggle();
            //         }
            //         return false; 
            //     }
            // });

            // $('.mobile-menu ul li.item-has-sub-submenu a').on('click', function() {
            //     $('.mobile-menu ul li.item-has-sub-submenu .sub-submenu').each(function() { 
            //         $(this).slideToggle();
            //     });                 
            // });

            // var $submenuIndicator = $('.mobile-menu li.item-has-submenu > a, .mobile-menu li.item-has-sub-submenu > a');
		    // $submenuIndicator.append('<span class="sub-menu-indicator float-end"><svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" width="12px" height="12px" viewBox="0 0 792 792" style="transform: rotate(90deg)" fill="#fff" > <polygon points="580.802,369.604 580.802,369.604 211.198,0 184.802,26.396 554.405,396 184.802,765.604 211.198,792 607.198,396 "/> </svg></span>');
		
        },

        /* ============================================================ */
        /* Sticky Menu
        /* ============================================================ */
        sticky_menu: function() {
            var fixed_top = $(".header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 150) {
                    fixed_top.addClass("is-sticky");
                } else {
                    fixed_top.removeClass("is-sticky");
                }
            });            
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' id='scroll-top' class='topbutton btn-hide'><span class='fas fa-level-up-alt'></span></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },


        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
                var $this = $(this);
    
                if( $this.hasClass("pt-separate-bg-element") ){
                    $this.append('<div class="pt-background">');
    
                    // Background Color    
                    if( $("[data-bg-color]") ){
                        $this.find(".pt-background").css("background-color", $this.attr("data-bg-color") );
                    }
    
                    // Background Image
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.find(".pt-background").append('<div class="pt-background-image">');
                        $this.find(".pt-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("opacity", $this.attr("data-bg-image-opacity") );
    
                        $this.find(".pt-background-image").css("background-size", $this.attr("data-bg-size") );
                        $this.find(".pt-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.find(".pt-background-image").css("background-position", $this.attr("data-bg-position") );
                        $this.find(".pt-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
    
                    // Parallax effect    
                    if( $this.attr("data-bg-parallax") !== undefined ){
                        $this.find(".pt-background-image").addClass("pt-parallax-element");
                    }
                }
                else {
    
                    if(  $this.attr("data-bg-color") !== undefined ){                        
                        $this.css("background-color", $this.attr("data-bg-color") );
                        if( $this.hasClass("btn") ) {
                            $this.css("border-color", $this.attr("data-bg-color"));
                        }
                    }
    
                    if( $this.attr("data-bg-image") !== undefined ){
                        $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );    
                        $this.css("background-size", $this.attr("data-bg-size") );
                        $this.css("background-repeat", $this.attr("data-bg-repeat") );
                        $this.css("background-position", $this.attr("data-bg-position") );
                        $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
                    }
                }
            });
        },

        /* ============================================================ */
        /* WoW Js
        /* ============================================================ */
        wowJs: function(){
            new WOW().init();
            
            // Adding "animate__animated" class to all element that has ".wow"
            document.querySelectorAll(".wow").forEach((el) => {
                el.classList.add("animate__animated");
            });
        },


        initializ: function() {
			// hotel_sarawak_food.preloader();
			hotel_sarawak_food.mobile_menu();
			hotel_sarawak_food.commonActivation();
			hotel_sarawak_food.scroll_to_top();
			hotel_sarawak_food.sticky_menu();;
			hotel_sarawak_food.swiperCarousel();
			hotel_sarawak_food.background_image();
			// hotel_sarawak_food.wowJs();
		}

    };
    $(function() {
		hotel_sarawak_food.initializ();
	});

})(jQuery);