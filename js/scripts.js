$(document).ready(function() {

    $.foundation.customForms.appendCustomMarkup();

    // tabs

    contentTabs();

    // accordion

    accordion();

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

function accordion() {
    var links = $('.js-accrd-ln'),
    descriptions = $('.js-accrd-content'),
    activeClass = 'js-accrd-ln_active';

    // init
    links.removeClass(activeClass);
    descriptions.hide();
    $(links[0]).addClass(activeClass);
    $(descriptions[0]).show();

    links.click(function() {
        var self = $(this);
        if(self.hasClass(activeClass)) {
            self.removeClass(activeClass).next(descriptions).hide();
        } else {
            links.removeClass(activeClass);
            self.addClass(activeClass);
            descriptions.hide();
            self.next(descriptions).show();
        }
        return false;
    });
}
