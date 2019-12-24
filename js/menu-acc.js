var menuAccordeon = document.querySelectorAll('.menu__item');
var closeMenuAcc = document.querySelector(".menu__close");

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

closeMenuAcc.addEventListener('click', function(e) {
    event.preventDefault();
    menuAccordeon[j].className = 'menu__item';
})