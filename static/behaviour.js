console.log('tsting');

const menu = document.getElementById('menu');
const cancel = document.getElementById('cancel');
const toggler = document.getElementById('btn');
const hide = document.getElementById('hide');

toggler.addEventListener('click', () => {
    if (menu.style.display == 'none') {
        hide.style.display = 'none';
        menu.style.display = 'initial';
        cancel.style.display = 'none';
    } else {
        hide.style.display = 'initial';
        menu.style.display = 'none';
        cancel.style.display = 'initial';
    }
});