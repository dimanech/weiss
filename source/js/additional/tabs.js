function contentTabsUnordered() {
	var links = $('.js-tab-ln'),
		content = $('.js-tab-content'),
		activeClass = 'js-tab-ln_selected';

	content.hide();
	$(content[0]).show();
	$(links[0]).addClass(activeClass);

	links.on('click', function (e) {
		e.preventDefault();

		var self = $(this);

		if (!self.hasClass(activeClass)) {
			links.removeClass(activeClass);
			self.addClass(activeClass);

			content.hide();
			$(self.attr('href')).fadeIn(200);
			//$('body, html').animate({scrollTop:self.offset().top}, 500);
		}
	});
}

function contentTabsOrdered() {
	var links = $('.js-tab-ln'),
		content = $('.js-tab-content'),
		activeClass = 'js-tab-ln_selected';

	content.hide();
	$(content[0]).show();
	$(links[0]).addClass(activeClass);

	links.on('click', function (e) {
		e.preventDefault();

		var self = $(this);

		if (!self.hasClass(activeClass)) {
			links.removeClass(activeClass);
			self.addClass(activeClass);

			content.hide();
			content.eq(self.index('.js-tab-ln-wr .js-tab-ln')).fadeIn(200);
		}
	});
}

$(document).ready(function () {

	contentTabsUnordered();
	//contentTabsOrdered();

});
