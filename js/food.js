jQuery(document).ready(function ($) {

    var distance = $('.recent-post').offset().top -100;
    //Console.log(distance);
$(window).scroll(function(){
    if ($(this).scrollTop() > distance) {
        $(".recent-post").addClass('fixed');
    } else {
        $(".recent-post").removeClass('fixed');
    }
})
});