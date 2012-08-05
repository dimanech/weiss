$(document).ready(function () {

    contentTabs();

});

function contentTabs() {
    var links = $('.js-tab-ln'),
        content = $('.js-tab-content'),
        activeClass = 'js-tab-ln_selected';

    content.hide();
    $(content[0]).show();
    $(links[0]).addClass(activeClass);

    links.click(function () {
        if ($(this).hasClass(activeClass)) {
            return false;
        } else {
            var self = $(this);
            links.removeClass(activeClass);
            self.addClass(activeClass);

            content.filter(":visible").hide();
            $(self.attr('href')).fadeIn(200);
            $('body').animate({scrollTop:self.offset().top}, 500);
            return false;
        }
    });
}