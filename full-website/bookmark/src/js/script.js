// Grab all the panel tabs
const tabs = document.querySelectorAll('.tab');

// Get all the panels
const panels = document.querySelectorAll('.panel');

// Add event listeners for all the Tab menu
tabs.forEach((tab) => {
    tab.addEventListener('click', onTabClick);
});

// Event Listener function
function onTabClick(e) {

    // Returns the div which was clicked
    // e.g <div class="py-5" data-target="panel-2">Speedy Searching</div>
    //console.log(e.target);

    // Deactivate the tabs other than the active one
    tabs.forEach((tab) => {

        // Remove the border from all the tabs
        tab.children[0].classList.remove('border-softRed', 'border-b-4', 'md:border-b-0');

        // Hide all panels
        panels.forEach((panel) => {
            panel.classList.add('hidden');
        });

        // Activate a new tab and panel based on the selected target
        e.target.classList.add('border-softRed', 'border-b-4');

        // Display the panel based on the selection
        // Get the data-garget
        const dataTarget = e.target.getAttribute('data-target');
        document.getElementById('panels').getElementsByClassName(dataTarget)[0].classList.remove('hidden');



    });
}


// Javascript for Hamburger menu
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo'); 

btn.addEventListener('click', navToggle);

function navToggle() {
    // Toggle the icon from hamburger to X
    // Add and remove a class from the button
    btn.classList.toggle('open');

    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

    // Change the logo to white
    if(menu.classList.contains('flex')){
        // Menu is open
        logo.setAttribute('src', './images/logo-bookmark-footer.svg');
    } else{
        logo.setAttribute('src', './images/logo-bookmark.svg');
    }

}