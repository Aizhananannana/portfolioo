//console.log("Java Script подключен");
//console.log("Начало");
//console.log(2+3);
//console.log("Конец");
//const studentName = "Аида";
//let projectCount = 2;
//projectCount = projectCount + 1;
//console.log(studentName);
//console.log(projectCount);
//console.log(typeof "Аида");
//console.log(typeof 0);
//console.log(typeof true);
//console.log(typeof "3");
//const htmlScore = 80;
//const cssScore = 90;
//const average = (htmlScore + cssScore) 
//console.log(average);
//console.log(7 % 3);
//console.log(htmlScore + cssScore)
//console.log(htmlScore - cssScore)
//console.log(htmlScore % cssScore)
//console.log(htmlScore / cssScore)
//console.log(htmlScore * cssScore)
//console.log(htmlScore ** cssScore)

//theme
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


//humburger
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function() {
    navigation.classList.toggle("active");
});


//form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");
    const success = document.getElementById("successMessage");

    let isValid = true;

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    success.textContent = "";

    name.classList.remove("invalid");
    email.classList.remove("invalid");
    message.classList.remove("invalid");

    // Name validation
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required!";
        name.classList.add("invalid");
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value.trim())) {
        emailError.textContent = "Enter a valid email!";
        email.classList.add("invalid");
        isValid = false;
    }

    // Message validation
    if (message.value.trim().length < 10) {
        messageError.textContent = "Message must contain at least 10 characters!";
        message.classList.add("invalid");
        isValid = false;
    }

    if (isValid) {
        success.textContent = "Message sent successfully!";
        form.reset();
    }

});