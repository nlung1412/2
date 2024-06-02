
//responsive nav bar
let navMenu = document.querySelector(".nav_navigation");
let hamburger = document.querySelector(".hamburger");


// animates hamburger menu. open-> close
hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle("change");
    navMenu.classList.toggle("change");
});