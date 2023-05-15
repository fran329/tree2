document.getElementById("button mx-4");
button1.addEventListener("click, navigateToPage2");
function navigateToPage2 (){
  window.location.href = "variedades.html";
}

document.getElementById("button mx-4");
button2.addEventListener("click, navitgateToPage2");
function navigateToPage2 (){
  window.location.href= "contacto.html";
}

document.getElementById("button mx-4");
button3.addEventListener("click, navigateToPage2");
function navigateToPage2 (){
  window.location.href="sobreurrku.html";
}

document.getElementById("button mx-4");
button4.addEventListener("click, navigateToPage2");
function navigateToPage2 (){
  window.location.href="index";
}

/*contact*/
const button2 = document.getElementById("button2");
const contactIcons = document.getElementById("contact-icons");

button2.addEventListener("click", function() {
  if (contactIcons.style.display === "none") {
    contactIcons.style.display = "flex"; // o "block" si prefieres
  } else {
    contactIcons.style.display = "none";
  }
});


/*sticky*/

