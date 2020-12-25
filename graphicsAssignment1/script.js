var image= document.querySelector('img');
var msg = document.getElementById("message"); 
var button = document.getElementById("button"); 
var TB = document.getElementById("tb"); 
TB.style.display = 'none';
       
        button.addEventListener("click", function () { 
           
          TB.style.display = '';
            var str = TB.value; 
            console.log(str); 
            msg.innerHTML += str; 
        }); 
image.onclick=function() {
var source= image.getAttribute ('src');
if (source==='images/firefox-icon.png'){
    image.setAttribute('src','images/mars.png');

}
else{
    image.setAttribute('src','images/firefox-icon.png');
}
}