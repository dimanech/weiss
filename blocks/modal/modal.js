$(document).ready(function() {
    modal();
});

/*TODO: load content, position*/

function modal() {
    var modal = $('.js-modal'),
        modalOpen = $('.js-modal-open'),
        modalClose = $('.js-modal-close');

    modal.hide();

    modalOpen.click(function() {
        modal.fadeIn(200);
        return false;
    });

    modalClose.click(function() {
        modal.fadeOut(200);
    });
}