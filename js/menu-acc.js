var menuAccordeon = document.querySelectorAll('.menu__item');

for (let i = 0; i < menuAccordeon.length; i++ ) {
    menuAccordeon[i].addEventListener('click', function(event) {
        event.preventDefault();
        if (menuAccordeon[i].className === 'menu__item') {
            for (let j = 0; j < menuAccordeon.length; j++) {
                menuAccordeon[j].className = 'menu__item';
            }
            menuAccordeon[i].className += " menu__item-active";
        } else {
            menuAccordeon[i].className = "menu__item"; 
        }
    })   
}