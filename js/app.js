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