const myForm = document.querySelector('.form');
const sendButton = document.querySelector('button[type="submit"]');
const modal = document.querySelector('.form__modal');
const closeModal = document.querySelector('.form-close');

closeModal .addEventListener('click', function(e) {
    // popup.classList.remove('popup');
    event.preventDefault();
    modal.style.display = 'none'
})

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;

        return false;
    } else {
        field.nextElementSibling.textContent = '';
        return true;
    }
}

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }

    if (!validateField(form.elements.phone)) {
        valid = false;
    }

    if (!validateField(form.elements.comments)) {
        valid = false;
    }

    return valid;
}


sendButton.addEventListener('click', function(e) {
    event.preventDefault();

    if (validateForm(myForm)) {

        var data = new FormData();

        data.append("name", myForm.elements.name.value)
        data.append("phone", myForm.elements.phone.value)
        data.append("comment", myForm.elements.comments.value)
        data.append("to", 'testmail@mail.ru')

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(data);
        xhr.addEventListener('load', function() {
            if (xhr.response.status) {
               console.log('ok'); 
               
               modal.style.display = 'inline-block';
            }
        });
    }
});


