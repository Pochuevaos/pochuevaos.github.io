const myForm = document.querySelector('.form');
const sendButton = document.querySelector('button[type="submit"]');
const modal = document.querySelector('.form__modal');
const closeModal = document.querySelector('.form-close');

console.log('111');

closeModal.addEventListener('click', function(e) {
    event.preventDefault();
    modal.style.display = 'none'

    var $body = $(document.body);
    $body.css("overflow", "auto");
    $body.width("auto");
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

function setMessage(message) {
    modal.style.display = 'inline-block';
    document.getElementById('result').innerHTML = message;
    var $body = $(document.body);
    var oldWidth = $body.innerWidth();
    $body.css("overflow", "hidden");
    $body.width(oldWidth); 
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
            if (xhr.response.status == '1') {
                setMessage("Сообщение отправлено");
            } else if (xhr.response.status == '0') {
                setMessage("Ошибка!");
            }
        });
    }
});


