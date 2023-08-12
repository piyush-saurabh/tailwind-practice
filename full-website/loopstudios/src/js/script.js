

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