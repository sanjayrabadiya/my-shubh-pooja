$(document).ready(function(){	
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
		
});