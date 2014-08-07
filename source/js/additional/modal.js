function modal() {
	var modal = $('.js-modal'),
			modalOpen = $('.js-modal-open'),
			modalClose = $('.js-modal-close');

	$('.modal-content').hide();

	// modal position
	$('.modal__window').each(function() {
		var self = $(this),
				modalBoxPosL = self.outerWidth() / 2;

		self.css('margin-left', '-' + modalBoxPosL + 'px');
	});

	// actions
	modalOpen.on('click', function (e) {
		e.preventDefault();

		var self = $(this),
				modalType = $('.' + self.data('modal'));

		modalType.find('.modal__content').html('').prepend($($(this).attr('href')).html());

		modalType.fadeIn(200);
//		$('body, html').animate({scrollTop:0}, 500);
	});

	modalClose.on('click', function () {
		modal.fadeOut(200);
	});

	modalClose.bind('keyup', function (e) {
		if (e.keyCode == 13) {
			modal.fadeOut(200);
		}
	});
}

$(document).ready(function () {

	modal();

});