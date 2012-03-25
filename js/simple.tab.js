$(document).ready(function () {
    $('.tabcontent').hide();
    $('.tabcontent:first').show();
    $('.tab-nav:first').addClass('selected');
    $('.tab-nav a').click(function () {
        $('.tab-nav a').removeClass('selected');
        $(this).addClass('selected');

        var current = $(this).attr('href');
        $('.tabcontent:visible').animate({height:'hide'});
        $(current).animate({height:'show'},'slow');
        return false;
    });
});
