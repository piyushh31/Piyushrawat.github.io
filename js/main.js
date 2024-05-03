(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 30
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });

    $(document).ready(function() {
        // Initialize Isotope
        var $grid = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
    
        // Filter items on button click
        $('#portfolio-flters').on('click', 'li', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
    });
    

    // Typed Initiate
    if ($('.header h2').length == 1) {
        var typed_strings = $('.header .typed-text').text();
        var typed = new Typed('.header h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
    
    
    // Skills
    $('.skills').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    $(document).ready(function(){
        // Define the number of projects to show for each category
        var projectsToShow = 2; // Change this number to show more or fewer projects
        
        // When you click on any filter option
        $('#portfolio-flters li').click(function(){
            var filterValue = $(this).attr('data-filter');
            $('.project').hide(); // Hide all projects
            
            // If "All" is selected
            if(filterValue == '*') {
                // Show only a certain number of projects for each category
                $('.project').slice(0, projectsToShow).show();
            } else {
                // Show projects corresponding to the selected category
                $(filterValue).show();
            }
            
            // Update the active filter
            $('#portfolio-flters li').removeClass('filter-active');
            $(this).addClass('filter-active');
        });
    });
    
    
    // Review slider
    $('.review-slider').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    
    $(document).ready(function(){
        $('.link-about').click(function(){
            $(this).closest('.portfolio-wrap').find('.about-content').toggle();
        });
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
})(jQuery);



