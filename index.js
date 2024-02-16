// - View the optimal layout for the site depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Receive an error message when the `form` is submitted if:
//   - The `input` field is empty
//   - The email address is not formatted correctly

function validateEmail() {
    const email = document.getElementById("email");
    const validationResult = true;
    const errorMessage = document.getElementById("error-message");
    const errorIcon = document.getElementById("error");
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!emailPattern.test(email.value) || email.value === "") {
        errorMessage.style.visibility = "visible";
        errorIcon.style.visibility = "visible";
        email.style.border = "2px solid red";
    } else {
        errorIcon.style.visibility = "hidden";
        errorMessage.innerText = "You entered a correct email!";
        errorMessage.style.color = "green";
        email.style.border = "solid 1px #f19b9c";
    }
}

const button = document.getElementById("btn");

button.addEventListener("click", validateEmail);
