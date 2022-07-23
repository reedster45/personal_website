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


// fade in stuff on page load
$(document).ready(function() {
    // nav bar
    $('.nav-name').hide().slideDown(1000);
    $('.toggler').hide().delay(500).slideDown(1000);

    // home
    $('.slide-1').hide().delay(1000).fadeIn(1000);
    $('.slide-2').hide().delay(1500).fadeIn(1000);
    $('.fade-1').hide().delay(2000).fadeIn(1000);

    // about
    $('.about-fade').hide().delay(1000).fadeIn(1000)

    // contact
    $('.contact').hide().delay(1000).fadeIn(1000)
});



// scroll down button
$("#scroll-down").click(function() {
    $('html, body').animate({
        scrollTop: $(".info").offset().top + 90
    }, 1000);
});

