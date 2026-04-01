$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        if (!target.length) {
            return false;
        }
        var position = target.offset().top;
        var heading = target.children('h4');
        var headingHeight = heading.length ? heading.height() : 0;
        var height = headingHeight * 2.5;
        $('body,html').animate({ scrollTop: position - height }, speed, 'swing');
        return false;
    });
});