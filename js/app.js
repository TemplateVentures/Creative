document.addEventListener('DOMContentLoaded', function () {  // Wow Animations
  new WOW().init();

let menuBar = document.getElementById('menu-bar');
    let navOverlay = document.getElementById('nav-overlay');
    let navlinkCont = document.getElementById('navlinkCont');
    menuBar.addEventListener('click', () =>{
        navOverlay.classList.toggle('nav-sm-screen-show');
        navlinkCont.classList.toggle('nav-sm-screen-show');
});

function closeHandler(){
    let navOverlay = document.getElementById('nav-overlay');
    let navlinkCont = document.getElementById('navlinkCont');

    navOverlay.classList.toggle('nav-sm-screen-show');
    navlinkCont.classList.toggle('nav-sm-screen-show');
    document.body.style.overflow = "visible";
}



// Add active class to the current button (highlight it)
var navLink = document.getElementById("navlink");
var links = navLink.getElementsByClassName("links");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("nav-Active");
    current[0].className = current[0].className.replace(" nav-Active", "");
    this.className += " nav-Active";
  });
}

});