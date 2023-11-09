var loader = document.getElementById('preloader');
var navbar = document.getElementById('navbar');
var footer = document.getElementById('footer');
window.addEventListener("load", function(){
    loader.style.display = "none";
    navbar.classList.add("fixed-top");
    footer.classList.add("fixed-bottom");
})