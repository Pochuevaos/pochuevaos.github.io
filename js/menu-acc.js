
//  Сложный способ // 

// let menuAcc = document.querySelector('.menu__list'),
// 	menuItems = menuAcc.children

// menuAcc.addEventListener('click', function (event) {
// let target = event.target
// 	if (!target.classList.contains('menu__item-title')) {
// 		return
// 	}
// event.preventDefault()
// 	target = target.parentNode
// 	if (target.classList.contains('menu__item-active')) {
// 			target.classList.remove('menu__item-active')
// 			return
// 	} else {
// 			for (var i = 0; i < menuItems.length; i++) {
// 					menuItems[i].classList.remove('menu__item-active')
//             }
//             target.classList.add('menu__item-active')
// 		}
// })

//  Более простой способ // 


var menuAccordeon = document.querySelectorAll('.menu__item');

for (let i = 0; i < menuAccordeon.length; i++ ) {
    menuAccordeon[i].addEventListener('click', function(event) {
        event.preventDefault();
        if (menuAccordeon[i].className === 'menu__item') {
            for (let j = 0; j < menuAccordeon.length; j++) {
                menuAccordeon[j].className = 'menu__item';
            }
            event.target.parentNode.className += " menu__item-active";
        } else {
            menuAccordeon[i].className = "menu__item"; 
        }
    })   
}

