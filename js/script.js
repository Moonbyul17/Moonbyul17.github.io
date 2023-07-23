//Script del preloader
        
let preloader = document.getElementById("preloader");
setTimeout(function(){
    preloader.style.transition="0.5s";
    preloader.style.visibility = "hidden";
}, 3000)