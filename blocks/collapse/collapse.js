$(document).ready(function() {

    collapse();

});

function collapse() {
    var links = $('.js-collap-ln'),
        descriptions = $('.js-collap-content'),
        activeClass = 'js-collap-ln_active';

    // init
    links.removeClass(activeClass);
    descriptions.hide();
    $(links[0]).addClass(activeClass);
    $(descriptions[0]).show();

    links.click(function() {
        var self = $(this);
        if(self.hasClass(activeClass)) {
            self.removeClass(activeClass).parent().next(descriptions).slideUp();
        } else {
            links.removeClass(activeClass);
            self.addClass(activeClass);

            descriptions.slideUp();
            self.parent().next(descriptions).slideDown();
        }
        return false;
    });
}