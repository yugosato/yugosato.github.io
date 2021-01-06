$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        var height = target.children('h4').height() * 2.5;
        $('body,html').animate({ scrollTop: position - height }, speed, 'swing');
        return false;
    });
});