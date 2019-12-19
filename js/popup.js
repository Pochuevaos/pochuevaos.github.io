function commentsPopup () {
    const openPopup = document.querySelectorAll('.js-feedback-modal');
    const popup = document.querySelector('.overlay');
    const closePopup = popup.querySelector('.js-close');
    const popupTitle = popup.querySelector('.overlay__title');
    const popupText = popup.querySelector('.overlay__text');
    

    for (let i=0; i < openPopup.length; i++) {
        openPopup[i].addEventListener('click', function() {
            // popup.classList.add('.popup');
            popup.style.display = 'inline-block'
            let thisParent = this.parentNode;
            let name = thisParent.querySelector('.reviews__name').innerText;
            let content = thisParent.querySelector('.reviews___text p').innerText;

            popupTitle.innerText = name;
            popupText.innerText = content;
        })
    }
    closePopup.addEventListener('click', function(e) {
        // popup.classList.remove('popup');
        event.preventDefault();
        popup.style.display = 'none'
    })
    popup.addEventListener('click', function(e) {
        if(e.target.classList.contains('popup')) {
            closePopup.click();
        }
    })



}

commentsPopup();