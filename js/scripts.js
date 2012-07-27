$(document).ready(function() {

    $.foundation.customForms.appendCustomMarkup();

    // tabs

    contentTabs();

    //$(".js-no-native select").sb();
    //$(".js-no-native input:check, .no-native input:radio").checkbox();

    //$('input[placeholder], textarea[placeholder]').placeholder();
});

function contentTabs() {
    $('.tabcontent').hide();
    $('.tabcontent:first').show();
    $('.tab-nav a:first').addClass('selected');

    $('.tab-nav a').click(function() {
        if($(this).hasClass('selected')) {
            return false;
        } else {
            $('.tab-nav a').removeClass('selected');
            $(this).addClass('selected');

            $('.tabcontent').filter(":visible").fadeOut(200);
            $($(this).attr('href')).fadeIn(200);

            return false;
        }
    });
}


