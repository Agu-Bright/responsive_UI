var x = window.matchMedia("(max-width: 700px)");
if (x.matches) { // If media query matches
    var close = document.getElementById('close');
    var show = document.getElementById('bar');
    var el = document.getElementById('link');
close.addEventListener('click', function(){
    el.style.display = "none";
    show.style.display = "block";
    console.log(el);
}, false);


show.addEventListener('click', function(){
    el.style.display = "block";
    show.style.display = "none";
}, false);


}

if (window.screen.width <)


