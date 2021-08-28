/** https://www.youtube.com/watch?v=In0nB0ABaUk */
const fullName = document.getElementById("fullname");

const emailAddress = document.getElementById("emailaddress");

const form = document.getElementById("form");

const errorElement = document.getElementById("error-msg");

const message = document.getElementById("message");

form.addEventListener("submit", (e) => {

    e.preventDefault();
    let error = [];
    if (fullName.value === "" || fullName.value == null) {
        error.push("Your Full Name is required");
    } else  {
        for (let i = 0; i < error.length; i++) {
            if (error[i] === "Your Full Name is required") {
                error.splice[i, 1];
            }
        }
    }

    if (message.value === "" || message.value == null) {
        error.push("Your message is required");
    } else  {
        for (let i = 0; i < error.length; i++) {
            if (error[i] === "Your message is required") {
                error.splice[i, 1];
            }
        }
    }

    /** https://www.w3resource.com/javascript/form/email-validation.php */

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress.value)) {
        for (let i = 0; i < error.length; i++) {
            if (error[i] === "Please enter a valid email address") {
                error.splice[i, 1];
            }
        }
    }
});
