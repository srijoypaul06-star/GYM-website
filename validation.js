document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("phoneError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";
    document.getElementById("result").innerHTML = "";

    if (name === "") {
      document.getElementById("nameError").innerHTML = "Please write your name";
      return;
    }

    if (email === "") {
      document.getElementById("emailError").innerHTML = "Please write your email";
      return;
    }

    if (!email.includes("@")) {
      document.getElementById("emailError").innerHTML = "Email must contain @";
      return;
    }

    if (phone === "") {
      document.getElementById("phoneError").innerHTML = "Please write your mobile number";
      return;
    }

    if (message === "") {
      document.getElementById("messageError").innerHTML = "Please write your message";
      return;
    }

    document.getElementById("result").innerHTML =
      `Thank you <b>${name}</b>, your message has been sent successfully!`;
    document.getElementById("result").style.color = "green";

    form.reset();
  });
});
