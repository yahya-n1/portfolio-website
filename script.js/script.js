const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

document.getElementById("formMessage").innerText =
"Thank you! Your message has been received.";

});

}
