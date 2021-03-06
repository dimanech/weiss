function collapse() {
	var links = $('.js-collap-ln'),
        descriptions = $('.js-collap-content'),
        activeClass = 'js-collap-ln_active';

    links.removeClass(activeClass);
	descriptions.hide();

	$(links[0]).addClass(activeClass);
	$(descriptions[0]).show();

    links.on('click', function(e) {
	    e.preventDefault();

        var self = $(this);

        if (self.hasClass(activeClass)) {
            self.removeClass(activeClass).parent().next(descriptions).slideUp();
        } else {
            links.removeClass(activeClass);
            self.addClass(activeClass);

            descriptions.slideUp();
            self.parent().next(descriptions).slideDown();
        }
    });

}

$(document).ready(function () {

	collapse();

});