const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = '<div class = " top_nav">  <div class="nav_navigation">   <a href = "index.html"><img class = "logo" src = "images/logo.png"></a><a href="index.html" class="navbtn txt--regular-xs">Shop all</a> <hr class = " nav_separator" /><a href="Trending_cards.html" class="navbtn txt--regular-xs">Trending</a><hr class = " nav_separator" /><a href="#" class="navbtn txt--regular-xs">Sale</a><hr class = " nav_separator" /><a href="#categories" class="navbtn txt--regular-xs">Categories</a> <hr class = " nav_separator" /></div><div class="nav_language">ENG/AUD</div> </div> <hr class = "line" /> <div class = "bot_nav"> <div class = "hamburger"><span class = "bar"></span><span class = "bar"></span><span class = "bar"></span></div><div class = "search_items"> <a href = "index.html"><img class = "res_logo" src = "images/logo.png"></a><input class = "search_bar" placeholder = "Search products"> <img class = "search_icon" src = "images/search.png">  </div>  <div class="nav_user">  <a href = "Cart_empty.html" class = "cart"> <img class = "nav_icon" src = "images/locked.png"></a>  <a href = "#" class = "profile"> <img class = "nav_icon" src = "images/profile.png"></a> </div> </div>';

}

createNav();


