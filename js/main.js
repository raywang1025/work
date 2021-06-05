$(document).ready(function() {
    // 先把.fade隱藏,延遲0.5秒之後在漸入3秒鐘
    $(".fade").hide(1000).delay(500).fadeIn(3000);

    // 找到.nav裡面的a元素,點擊之後從html跟body中移到,點擊的元素中的href處，用2秒的速度
    $('.nav').find('a').click(function() {
        var $href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $($href).offset().top
        }, 2000);
        return false;
    });
});