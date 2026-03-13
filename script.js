document.addEventListener("DOMContentLoaded", function() {

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

const output = document.getElementById("formMessage");

if(name === "" || email === "" || message === ""){

output.innerHTML = "Please fill in all fields.";

}else{

output.innerHTML = "Thank you! Your message has been received.";

form.reset();

}

});

}

});