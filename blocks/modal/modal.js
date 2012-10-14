function modal() {
    var modal = $('.js-modal'),
        modalBox = $('.modal__window'),
        modalBoxPosL = modalBox.outerWidth() / 2,
        modalOpen = $('.js-modal-open'),
        modalClose = $('.js-modal-close'),
	    modalCloseAction = modal.fadeOut(200);

    $('.modal-content').hide();

    // modal position
    modalBox.css('margin-left', '-' + modalBoxPosL + 'px');

    // actions
    modalOpen.on('click', function () {
	    $('.modal__content').html('').prepend($($(this).attr('href')).html());

        modal.fadeIn(200);
        return false;
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