function modal() {
	var modal = $('.js-modal'),
		modalBox = $('.modal__window'),
		modalBoxPosL = modalBox.outerWidth() / 2,
		modalOpen = $('.js-modal-open'),
		modalClose = $('.js-modal-close');

	$('.modal-content').hide();

	// modal position
	modalBox.css('margin-left', '-' + modalBoxPosL + 'px');

	// actions
	modalOpen.on('click', function (e) {
		e.preventDefault();

		$('.modal__content').html('').prepend($($(this).attr('href')).html());

		modal.fadeIn(200);
		$('body').addClass('js-modal-animated');
	});

	modalClose.on('click', function () {
		modal.fadeOut(200);
		$('body').removeClass('js-modal-animated');
	});

	modalClose.bind('keyup', function (e) {
		if (e.keyCode == 13) {
			modal.fadeOut(200);
			$('body').removeClass('js-modal-animated');
		}
	});
}

$(document).ready(function () {

	modal();

});