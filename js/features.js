// product page -> go to cartPop up transition script


// get popup element
let popup = document.getElementById("popup");


// adds classname to add to cart button
function showPopup(){
    popup.classList.add("show_popup");
}

function closePopup(){
    popup.classList.remove("show_popup");
}