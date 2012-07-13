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
    var links = $('.accordion > section > header > h3 > a'), 
    descriptions = $('.accordion .accordion-content');

    // init
    links.removeClass('active');
    descriptions.hide();
    $(links[0]).addClass('active');
    $(descriptions[0]).show();

    $('.accordion .collapse').live('click', function() {
        $(this).closest('section').find('header > h3 > a').removeClass('active');
        $(this).closest('.accordion-content').slideUp();
        return false;
    });

    links.click(function() {
        var self = $(this);
        if(self.hasClass('active')) {
            self.removeClass('active').parent().parent().next('.accordion-content').slideUp();
        } else {
            links.removeClass('active');
            self.addClass('active');
            descriptions.slideUp();
            self.parent().parent().next().slideDown();
        }
        return false;
    });
}
