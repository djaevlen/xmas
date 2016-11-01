jQuery(document).ready(function($) {
    
    setTimeout(function(){
        var videoheight = $('video').outerHeight();
        var h1_top = (videoheight / 2);
        console.log(videoheight);
        $('.splash').css('height', videoheight);
        $('.splash').css('top', h1_top);
        $('.splash .headline').fadeIn(3000);
    }, 1000);
    
    // console.log(h1_top);
    
    $(window).resize(function() {
        videoheight = $('video').height();
        h1_top = (videoheight / 2);
        $('.splash').css('top', h1_top);
        $('.splash').css('height', videoheight);
    });

    $('#arrow').click(function(event) {
        $('html, body').animate({
          scrollTop: $('#agenda').offset().top
        }, 1000);
    });

});
