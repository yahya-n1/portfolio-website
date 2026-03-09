const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("formMessage").innerText =
"Thank you! Your message has been received.";

});

}
