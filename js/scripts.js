$(document).ready(function() {
    $('#nav li a').click(function(){
       $('#nav li a').removeClass('active'); 
       $(this).addClass('active'); 
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

});
