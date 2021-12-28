var close = document.getElementById('close');
var bar = document.getElementById('bar');
var link = document.getElementById('link');

bar.addEventListener('click', function(){
    bar.style.visibility = "hidden";
    link.style.display = "flex";
}, false)

close.addEventListener('click', function(){
    link.style.display = "none";
    bar.style.visibility = "visible";
}, false)