$(document).ready(function () {

	contentTabsUnordered();
	//contentTabsOrdered();

});

function contentTabsUnordered() {
	var links = $('.js-tab-ln'),
		content = $('.js-tab-content'),
		activeClass = 'js-tab-ln_selected';

	content.hide();
	$(content[0]).show();
	$(links[0]).addClass(activeClass);

	links.click(function() {
		var self = $(this);

		if (self.hasClass(activeClass)) {
			return false;
		} else {
			links.removeClass(activeClass);
			self.addClass(activeClass);

			content.hide();
			$(self.attr('href')).fadeIn(200);
			$('body').animate({scrollTop:self.offset().top}, 500);
			return false;
		}
	});
}

/*
function contentTabsOrdered() {
	var links = $('.js-tab-ln'),
		content = $('.js-tab-content'),
		activeClass = 'js-tab-ln_selected';

	content.hide();
	$(content[0]).show();
	$(links[0]).addClass(activeClass);

	links.click(function() {
		var self = $(this);

		if (self.hasClass(activeClass)) {
			return false;
		} else {
			links.removeClass(activeClass);
			self.addClass(activeClass);

			content.hide();
			content.eq(self.index(links)).fadeIn(200);
			return false;
		}
	});
}*/
