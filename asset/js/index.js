let menu = document.querySelector('.fa-bars')
let nav = document.querySelector('nav');
let navbar = document.querySelector('nav')
menu.addEventListener('click', function () {
    menu.classList.toggle('active');

})


// OnScroll event handler
let onScroll = function () {

    // Get scroll value
    const scroll = document.documentElement.scrollTop

    // If scroll value is more than 0 - add class
    if (scroll > 150) {
        navbar.classList.add("scrolled");
        navbar.style.backgroundColor = 'rgba(0 , 0, 0, 1)'

    } else {
        navbar.classList.remove("scrolled")
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.75)'
    }
}

// Use the function
window.addEventListener('scroll', onScroll)