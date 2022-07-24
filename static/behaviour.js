

// menu popup
const menu = $('#menu');
const cancel = $('#cancel');
const toggler = $('#btn');
const hide = $('#hide');

toggler.click(toggleMenu) 

function toggleMenu() {
    menu.toggle(1000);
    cancel.toggle(1000);
    hide.toggle();
};


// fade in stuff on page load
$(document).ready(function() {
    // nav bar
    $('.nav-name').slideDown(1000);
    $('.toggler').delay(500).slideDown(1000);

    // home
    $('.fade-1').delay(1000).fadeIn(1000);
    $('.fade-2').delay(1500).fadeIn(1000);
    $('#scroll-style').delay(2000).fadeIn(1000);

    // about
    $('.about-fade').delay(1000).fadeIn(1000);

    // contact
    $('.contact').delay(1000).fadeIn(1000);
});



// scroll down button
$("#scroll-down").click(function() {
    $('html, body').animate({
        scrollTop: $(".info").offset().top + 90
    }, 1000);
});

