const myForm = document.querySelector('.form');
const sendButton = document.querySelector('button[type="submit"]');

sendButton.addEventListener('click', function(e) {
    event.preventDefault();
    
    console.log(myForm.elements);
})