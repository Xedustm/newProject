$(document).ready(function() {
    const $container = $('#container');
    
    $('#register').click(function() {
        $container.addClass('active');
    });

    $('#login').click(function() {
        $container.removeClass('active');
    });
});