$(document).ready(function() {
    $('#nav li a').click(function(){
       $('#nav li a').removeClass('active'); 
       $(this).addClass('active');
       return false;
    });
    
    $('#twocolumn-s').click(function() {
        $('body').removeClass().addClass('sidebar-second');
    });
    $('#twocolumn-f').click(function() {
        $('body').removeClass().addClass('sidebar-first');
    });
    $('#threecolumn').click(function() {
        $('body').removeClass().addClass('two-sidebars');
    });
    
    // tabs
    
    $('.tabcontent').hide();
    $('.tabcontent:first').show();
    $('.tab-nav:first').addClass('selected');
    $('.tab-nav a').click(function () {
        $('.tab-nav a').removeClass('selected');
        $(this).addClass('selected');

        var current = $(this).attr('href');
        $('.tabcontent:visible').animate({height:'hide'});
        $(current).animate({height:'show'},'slow');
        return false;
    });

});
