const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = '<div class = " top_nav">   <div class="nav_navigation">    <a href = "index.html"><img class = "logo" src = "images/logo.png"></a>     <a href="index.html" class="navbtn txt--regular-xs">Shop all</a>    <a href="Trending_cards.html" class="navbtn txt--regular-xs">Trending</a>   <a href="#" class="navbtn txt--regular-xs">Sale</a> <a href="#categories" class="navbtn txt--regular-xs">Categories</a> </div>  <div class="nav_language">ENG/AUD</div> </div>  <hr class = "line" />   <div class = "bot_nav"> <div class = "search_items">    <div class = "left_resnav"> <div>   <input id = "check" type = "checkbox">  <label for = "check"  class = "menu_icon">  <img id = "hamburger" src = "images/menu.png">  <img id = "close" src = "images/closeicon (1).png"> </label>    </div>  <a href = "index.html"><img class = "logo res_logo" src = "images/logo.png"></a>    </div>  <input class = "search_bar" placeholder = "Search products">    <img class = "search_icon" src = "images/search.png">   </div>  <div class="nav_user">  <a href = "Cart.html" class = "cart"> <img class = "nav_icon" src = "images/locked.png"></a>    <a href = "#" class = "profile"> <img class = "nav_icon" src = "images/profile.png"></a>    </div>  </div>';

}

createNav();