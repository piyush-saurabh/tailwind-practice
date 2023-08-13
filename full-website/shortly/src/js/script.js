
const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMsg = document.getElementById('err-msg');

// Add an event listener to execute a function on click of the button inside the form
linkForm.addEventListener('submit', formSubmit);

// Validate a URL
// Takes a string as an argument. Returns true/false based on if string is a URL
function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
        '((\\d{1,3}\\.){3}\\d{1,3}))' +
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?' +
        '(\\#[-a-z\\d_]*)?$',
      'i'
    )
    return !!pattern.test(str)
  }

function formSubmit(e){

    // Prevent the default behavior which is sending the request to backend 
    e.preventDefault()

    // Get the value from the text box
    // console.log(input.value);

    if(input.value === ''){
        // In div show the error message
        errMsg.innerHTML = 'Please enter something';

        // Make the text box 
        input.classList.add('border-red');
    } else if (!validURL(input.value)) {
        // In div show the error message
        errMsg.innerHTML = 'Please enter a valid URL';

        // Make the text box 
        input.classList.add('border-red');
    } else {
        // Remove the error message and Red border
        errMsg.innerHTML = '';
        input.classList.remove('border-red');
        alert('Success');
    }
}

// Menu display
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    // Toggle the icon from hamburger to X
    // Add and remove a class from the button
    btn.classList.toggle('open');

    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

}