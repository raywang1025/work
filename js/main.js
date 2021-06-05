$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

$(function() {
    // 找到.nav裡面的a元素,點擊之後從html跟body中移到,點擊的元素中的href處，用2秒的速度
    $('.nav').find('a').click(function() {
        var $href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $($href).offset().top
        }, 2000);
        return false;
    });
})