$(document).ready(function() {
    modal();
});

/*TODO: position*/

function modal() {
    var modal = $('.js-modal'),
        modalBox = $('.modal__box'),
        modalOpen = $('.js-modal-open'),
        modalClose = $('.js-modal-close');

    $('.modal-content').hide();

    modalOpen.live("click", function() {
        $('.modal__content').html('').prepend( $('#' + $(this).attr('data-modal-rel')).html() );

        if (modal.height() > $(window).height()) {
            modalBox.css('position', 'absolute');
        } else {
            modalBox.css('position', 'fixed');
        }

        modal.fadeIn(200);
        return false;
    });

    modalClose.click(function() {
        modal.fadeOut(200);
    });
}