const menu = $('#menu');
const cancel = $('#cancel');
const toggler = $('#btn');
const hide = $('#hide');

toggler.click(toggleMenu) 

function toggleMenu() {
    if (menu.css('display') == 'none') {
        hide.css('display', 'none');
        menu.css('display', 'initial');
        cancel.css('display', 'none');
    } else {
        hide.css('display', 'initial');
        menu.css('display', 'none');
        cancel.css('display', 'initial');
    }
};


// fade in stuff
$(document).ready(function () {
    $('.fade-1').hide().fadeIn(2000);
});

// scroll down button
$("#scroll-down").click(function() {
    $('html, body').animate({
        scrollTop: $(".info").offset().top + 90
    }, 1000);
});

