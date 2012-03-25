function accordion() {
  var links = $('.accordion > section > header > h3 > a'),
      descriptions = $('.accordion  .accordion-content');

    // init
    links.removeClass('active');
    descriptions.hide();
    $(links[0]).addClass('active');
    $(descriptions[0]).show();

    $('.accordion .expand-all').live('click', function(){
        links.addClass('active');
        descriptions.slideDown();
        return false;
    });

    $('.accordion  .collapse-all').live('click', function(){
        links.removeClass('active');
        descriptions.slideUp();
        return false;
    });

    $('.accordion  .collapse').live('click', function(){
        $(this).closest('section').find('header > h3 > a').removeClass('active');
        $(this).closest('.accordion-content').slideUp();
        return false;
    });

  links.click(function () {
        var self = $(this);
        if (self.hasClass('active')) {
          self.removeClass('active').parent().parent().next('.accordion-content').slideUp();
        } else {
          links.removeClass('active');
          self.addClass('active');
          descriptions.slideUp();
          self.parent().parent().next().slideDown();
        }
        return false;
      });
}

$(document).ready(function () {
    accordion();
});
