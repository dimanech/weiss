function itemsFilter() {
	var sortBtn = $('.js-filter-btn'),
		sortBtnActClass = 'js-filter-btn_active',
		sortItem = $('.js-filter-item');

	sortBtn.click( function (e) {
		e.preventDefault();

		var self = $(this),
			filter = self.data('filter'),
			query = '[data-filter*="' + filter + '"]';

		if (filter === '*') query = '[data-filter]';

		if (self.hasClass(sortBtnActClass)) return;

		sortBtn.removeClass(sortBtnActClass);
		self.addClass(sortBtnActClass);

		sortItem.hide();
		$('.js-filter-item' + query).show();
	});
}

$(document).ready(function () {

	itemsFilter();

});

