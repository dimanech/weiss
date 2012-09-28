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
    modalOpen.live("click", function() {
	    $('.modal__content').html('').prepend( $($(this).attr('href')).html() );

        modal.fadeIn(200);
        return false;
    });

    modalClose.click(function() {
        modal.fadeOut(200);
    });
}

$(document).ready(function() {

	modal();

});