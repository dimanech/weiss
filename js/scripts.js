$(document).ready(function() {

    $.foundation.customForms.appendCustomMarkup();

    // tabs

    contentTabs();

    //$(".js-no-native select").sb();
    //$(".js-no-native input:check, .no-native input:radio").checkbox();

    //$('input[placeholder], textarea[placeholder]').placeholder();
});

function contentTabs() {
    var links = $('.js-tab-ln'),
        content = $('.js-tab-content'),
        activeClass = 'js-tab-ln_selected';

    content.hide();
    $(content[0]).show();
    $(links[0]).addClass(activeClass);

    links.click(function() {
        if($(this).hasClass(activeClass)) {
            return false;
        } else {
            var self = $(this);
            links.removeClass(activeClass);
            self.addClass(activeClass);

            content.filter(":visible").fadeOut(200);
            $(self.attr('href')).fadeIn(200);
            return false;
        }
    });
}


