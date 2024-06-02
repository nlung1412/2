
//universal footer across all pages
let createFoot = () => {
    let nav = document.querySelector('.footer');

    // to be inserted into html
    nav.innerHTML = '<p id = "foot_title">Handpress Cards</p>   <div class = "foot_container">  <div class = "foot_cat">    <p class = "foot_sub">SHOP ALL</p>  <a href = "Trending-cards.html" class = "foot_nav">Trending</a>     <a href = "#" class = "foot_nav">Sale</a>   <a href = "#categories" class = "foot_nav">Categories</a>   <a href = "#Personalise" class = "foot_nav">Personalised eCards</a>     </div>      <div class = "foot_cat">    <p class = "foot_sub">CUSTOMER SERVICE</p>  <a href = "#" class = "foot_nav">About us</a>   <a href = "#" class = "foot_nav">Contact us</a>     <a href = "#" class = "foot_nav">Join us</a>    <a href = "#" class = "foot_nav">Return and Exchanges</a>    </div>     <div class = "foot_cat">     <p class = "foot_sub">OTHER ENQUIRIES</p>  <a href = "#" class = "foot_nav">Careers</a>    <a href = "#" class = "foot_nav">FAQs</a>   <a href = "#" class = "foot_nav">Shipping information</a>   <a href = "#" class = "foot_nav">Main website</a>   </div>      <div class = "foot_cat">     <p class = "foot_sub">FOLLOW US</p>    <div class = "foot_icon">   <img class = "social" src = "images/Facebook_black.png">    <img class = "social" src = "images/Instagram_black.png">   <img class = "social" src = "images/Twitter_black.png">     </div>      </div>      </div>';

}

createFoot();