$(document).ready(function(){	
    $('.open-menu').click(function(event) {
		$('body').toggleClass('show-menu');
	});	
	$('.close-menu,.header-menu ul li a').click(function(event) {
		$('body').removeClass('show-menu');
	});	
	$('.scroll-to-next a[href^="#"]').on('click', function(e) {
        e.preventDefault();

        let target = $($(this).attr('href'));

        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 600);
        }
    });

    // Show "scroll to top" button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $("#topBtn").fadeIn();
        } else {
            $("#topBtn").fadeOut();
        }
    });

	// Scroll to top
    $("#topBtn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
    });

	$('.product-list').slick({
        infinite: false,
        slidesToShow: 3.3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.testimonials-slider').slick({
        infinite: false,
        slidesToShow: 2.4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
		
});