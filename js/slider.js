$('.slider').slick(
    {
        prevArrow: $('.slider__scroll__left'),
        nextArrow: $('.slider__scroll__right')
    }
);

// $('.slider__scroll__left').on('click', (e) => {
// 	e.preventDefault();
// });

// $('.slider__scroll__right').on('click', (e) => {
// 	e.preventDefault();
// });




// function Slider (selector, settings) {
//     var slider = document.querySelector(selector);
//     var list = slider.querySelector('ul');
//     var countslides = list.children.length;
//     var activeSlide = 0;
    
//     list.style.transition = `${settings.duration || .5}s ${settings.animate || 'ease-in'}`;
 
 
//     slider.addEventListener('click', (e) =>{
//      var target = e.target.closest('.slider__scroll');
     
 
//      if (target && target.classList.contains('slider__scroll') ){
//        e.preventDefault();
//        var vector = target.dataset.vector;
      
//        this[vector]();
//      }
//     });
 
//     this.previous = function(){
//       if (activeSlide > 0) {
//        activeSlide--;
//       }else if (settings.loop){
//        activeSlide = countslides;
//      }
     
//      translateX();
//    }
   
//    this.next = function () {
//      if (activeSlide<countslides -1){
//        activeSlide++;
//      } else if (settings.loop){
//        activeSlide = 0;
//      }
     
//      translateX();
//    }
 
//   function translateX(){
//      list.style.transform = `translate(${-(activeSlide * 100)}%)`;
//    }
//   }
 
//   var slider1 = new Slider('#slider1', {
//     loop: true,
//     animate: 'cubic-bezier(0,.06,.99,.38)',
//     duration: .4
//   });
 
//  //   setInterval(function(){
//  //    slider1.next();
//  //  },5000);
//  // console.log(slider1);
 
//  window.addEventListener('keydown', (e)=> {
//  if ( e.keyCode === 39){
//    slider1.next();
//  }
//  if ( e.keyCode === 37){
//    slider1.previous();
//  }
//  })



 