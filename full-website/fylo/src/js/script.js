
// Toggle Theme Button
const themeToggleBtn = document.getElementById('theme-toggle');

// Dark SVG Icon
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');

// Light SVG Icon
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

// Check the current mode and show the appropriate SVG
if (localStorage.getItem('color-theme') === 'dark' || 
    (!('color-theme' in localStorage) && 
    window.matchMedia('(prefers-color-scheme: dark)').matches)
  ){
    // We are in dark mode
    // Show the light icon
    themeToggleLightIcon.classList.remove('hidden');
    
  } else {
    // We are in light mode
    // show the dark icon
    themeToggleDarkIcon.classList.remove('hidden');
}

// Listen for click event for the toggle button click
themeToggleBtn.addEventListener('click', toggleMode);

// Handler for button toggle
function toggleMode(){
    // Toggle Icon
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // Check if local storage has color theme
    if(localStorage.getItem('color-theme')){
        // color-theme object exists in local storage
        if(localStorage.getItem('color-theme') === 'light') {
            // Add the class 'dark' on the '<html>' element
            document.documentElement.classList.add('dark');

            // Set the value of local storage
            localStorage.setItem('color-theme', 'dark');

        } else{
            // Add the class 'dark' on the '<html>' element
            document.documentElement.classList.remove('dark');

            // Set the value of local storage
            localStorage.setItem('color-theme', 'light');
        }
    }else{
        // color-theme object DOES NOT exists in local storage

        // If the dark class is on <html>, set local storage
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }else{
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }

    }
}
