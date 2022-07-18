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