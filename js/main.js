const hamburger = document.querySelector(".burgnav");
const fullScreenMenu = document.querySelector(".fullscreen-menu");
const closeMenu = document.querySelector(".fullscreen-menu__close");
const menuLink = document.querySelectorAll(".fullscreen-menu__link");

let op = 0.2;  

let increaseOpacity = function() {
    setTimeout( function() {
        if (fullScreenMenu.style.opacity < 1) {
            op += 0.2;
            fullScreenMenu.style.opacity = op;
            increaseOpacity();
        }
    }, 100);
}


let decreaseOpacity = function() {
    setTimeout( function() {
        if (fullScreenMenu.style.opacity > 0) {
            op -= 0.2;
            fullScreenMenu.style.opacity = op;
            decreaseOpacity();
        }
    }, 100);
    if (op == 0 || op < 0 ) {
        fullScreenMenu.style.display = 'none';
    }     
} 


hamburger.addEventListener('click', function() {
    fullScreenMenu.style.display = 'block';
    increaseOpacity();
})

closeMenu.addEventListener('click', function() {
    decreaseOpacity();
})


for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', function() {
        decreaseOpacity();
    })
}

fullScreenMenu.addEventListener('click', function(e) {
    if (e.target != closeMenu || e.target != menuLink ) {
        decreaseOpacity();
    }
})

