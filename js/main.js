const hamburger = document.querySelector(".burgnav");
const fullScreenMenu = document.querySelector(".fullscreen-menu");
const closeMenu = document.querySelector(".fullscreen-menu__close");
const menuLink = document.querySelectorAll(".fullscreen-menu__link");

let op = 0.2;


//fullScreenMenu.style.opacity = 0.5;

let increaseOpacity = function() {
    setTimeout( function() {
        if (fullScreenMenu.style.opacity < 1) {
            op += 0.2;
            fullScreenMenu.style.opacity = op;
            increaseOpacity();
        }
       
    }, 100);
}


hamburger.addEventListener('click', function() {
    fullScreenMenu.style.display = 'block';
    increaseOpacity();
})

closeMenu.addEventListener('click', function() {
    fullScreenMenu.style.display = 'none';
    fullScreenMenu.style.opacity = 0;
})


for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function() {
        closeMenu.click();
        fullScreenMenu.style.opacity = 0;
    })

    fullScreenMenu.addEventListener('click', function(e) {
        if (e.target === fullScreenMenu) {
        closeMenu.click();
        fullScreenMenu.style.opacity = 0;
        }
    })
}

