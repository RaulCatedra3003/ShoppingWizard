// Get first elements from DOM
const navbarMenu = document.getElementById('navbar-list');
const hamburger = document.getElementById('hamburger-menu');
const miniatures = document.querySelectorAll(".miniature");
const mainImg = document.getElementById('main-image');
const colorChange = document.querySelectorAll('.color-img-alt');
const price = document.getElementById("price");
const size = document.getElementById("size");
const sizeError = document.getElementById("sizeError");
const mainDiv = document.getElementById("main-div");
const progressBar = document.getElementById("progress-bar");
const progressBar2 = document.getElementById("progressBar-2");
const progressBar3 = document.getElementById('progressBar-3');
const progressBar4 = document.getElementById('progressBar-4');
const buyButton = document.getElementById("buy-button");

// Hamburger menu
hamburger.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
    hamburger.classList.toggle('rotate');
})

// Change img
miniatures.forEach(function(el) {
    el.addEventListener("click", function(e) {
        mainImg.src = e.target.alt
    })
})
miniatures.forEach(function(el) {
    el.addEventListener("mouseover", function(e) {
        mainImg.src = e.target.alt;
    })
})

// Change miniature imgs
colorChange.forEach(function(el) {
    el.addEventListener('click', function(e) {
        var specialPrice = "59,99 €";
        mainImg.src = e.target.alt;
        for (let i = 0; i < miniatures.length; i++) {
            miniatures[i].src = e.target.alt.replace("1", (i+1));
            miniatures[i].alt = e.target.alt.replace("1", (i+1));
        }
        if (e.target.classList.contains("special-price")) {
            price.textContent = specialPrice;
        } else {
            price.textContent = "49.99 €";
        }
    })
})

// Event listeners of size
size.addEventListener("blur", validateSize);
size.addEventListener("click", hideSizeError);

// Event listener for button
buyButton.addEventListener("click", inicioCompra);
buyButton.addEventListener("click", timeOut);


// Global variables to validate forms
var sizeValidate = false;
var usernameValidate = false;
var emailValidate = false;
var passwordValidate = false;
var confirmpasswordValidate = false;
var userFNameValidate = false;
var userLNameValidate = false;
var userBirthdayValidate = false;
var userAdressValidate = false;
var userPostalCodeValidate = false;
var userCountryValidate = false;
var userPhoneValidate = false;

/* var counter = new Date(); */
var product = {
    price: "",
    color: "",
    size: "",
    shippingOption: "",
    deliveryDate: "",
}
var user = {
    username: "",
    email: "",
}

/* Gobal Functions to eventlisteners */

//Index
function hideSizeError() {
    sizeError.classList.add("error-hiden");
};
function validateSize() {
    if (size.value === "default") {
        sizeError.classList.remove("error-hiden");
        sizeValidate = false;
    } else {
        sizeValidate = true;
    }
}
function hideError(e) {
    var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
    if (mensageElement.classList.contains("error-hiden")) {
        return
    } else {
        mensageElement.classList.add("error-hiden");
    }
}
function clearForm1() {
    submitStepOneBtn.disabled = true;
}
function clearForm2() {
    submitStepTwoBtn.disabled = true;
}
//Functions to Event Listeners step 1
function validateUserName (e) {
    var username = /^\S{5,20}$/
    var validateUsername = userUsername.value;
    if (validateUsername.match(username)) {
        user.username = validateUsername;
        usernameValidate = true;
        if (usernameValidate === true && emailValidate === true && passwordValidate === true && confirmpasswordValidate === true) {
            submitStepOneBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        } else {
            return
        }
        usernameValidate = false;
        submitStepOneBtn.disabled = true;
    }
}
function validateUserEmail (e) {
    var email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var validateEmail = userEmail.value;
    if (validateEmail.match(email)) {
        user.email = validateEmail;
        emailValidate = true;
        if (usernameValidate === true && emailValidate === true && passwordValidate === true && confirmpasswordValidate === true) {
            submitStepOneBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return false;
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        } else {
            return false;
        }
        emailValidate = false;
        submitStepOneBtn.disabled = true;
    }
}
function validateUserPassword (e) {
    var leters = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/
    var validateUserPassword = userPassword.value;
    if ((validateUserPassword.match(leters))){
        passwordValidate = true;
        if (usernameValidate === true && emailValidate === true && passwordValidate === true && confirmpasswordValidate === true) {
            submitStepOneBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        } else {
            return
        }
        passwordValidate = false;
        submitStepOneBtn.disabled = true;
    }
}
function validateConfirmPassword(e) {
    var leters = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,20}$/
    var validateUserConfirmpass = userConfirmpass.value;
    if ((validateUserConfirmpass.match(leters)) && validateUserConfirmpass === userPassword.value){
        confirmpasswordValidate = true;
        if (usernameValidate === true && emailValidate === true && passwordValidate === true && confirmpasswordValidate === true) {
            submitStepOneBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        } else {
            return
        }
        confirmpasswordValidate = false;
        submitStepOneBtn.disabled = true;
    }
}

//Functions to Event Listeners step 2
function validateUserFName(e) {
    var leters = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/
    var userFNameV = userFName.value;
    var userFNameL = userFNameV.length;
    if ((userFNameV.match(leters)) && userFNameL >= 2 && userFNameL <= 20){
        userFNameValidate = true;
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        } else {
            return
        }
        userFNameValidate = false;
    }
}
function validateUserLName(e) {
    var leters = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/
    var userLNameV = userLName.value;
    var userLNameL = userLNameV.length;
    if ((userLNameV.match(leters)) && userLNameL >= 2 && userLNameL <= 20){
        userLNameValidate = true;
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && postalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
    } else {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        } else {
            return
        }
        userLNameValidate = false;
    }
}
function validateUserBirthday (e) {
    var date = /^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$/
    var userBirthdayV = userBirthday.value;
    if (userBirthdayV.match(date)) {
        userBirthdayValidate = true;
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        } else {
            return
        }
        userBirthdayValidate = false;
    }
}
function validateUserAdress (e) {
    var leters = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü0-9\s\.\|\/\\\,\º]+$/
    var userAdressV = userAdress.value;
    var userAdressL = userAdressV.length;
    if (userAdressV.match(leters) && userAdressL > 5 && userAdressL <= 50) {
        userAdressValidate = true;
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        } else {
            return
        }
        userAdressValidate = false;
    }
}
function validateUserPostalcode (e) {
    var numbers = /^[0-9]+$/
    var userPostalcodeV = userPostalcode.value;
    var userPostalcodeL = userPostalcodeV.length;
    if (userPostalcodeV.match(numbers) && userPostalcodeL === 5) {
        userPostalCodeValidate = true;
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        } else {
            return
        }
        userPostalCodeValidate = false;
    }
}
function validateUserCountry (e) {
    var andorra = document.getElementById("andorra");
    var spain = document.getElementById("spain");
    var france = document.getElementById("france");
    var germany = document.getElementById("germany");
    var greece = document.getElementById("greece");
    if (userCountry.value === "default") {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        }
        userCountryValidate = false;
    } else if (userCountry.value === "andorra") {
        andorra.selected = true;
        userCountryValidate = true;
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else if (userCountry.value === "spain") {
        spain.selected = true;
        userCountryValidate = true;
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
    } else if (userCountry.value === "france") {
        france.selected = true;
        userCountryValidate = true;
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else if (userCountry.value === "germany") {
        germany.selected = true;
        userCountryValidate = true;
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else if (userCountry.value === "greece") {
        greece.selected = true;
        userCountryValidate = true;
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    }
}
function validateUserCountryP (e) {
    if (userCountryP.value === "default") {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        } else {
            return
        }
    } else {
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    }
}
function validateUserPhone (e) {
    var phone = /^[0-9]+$/
    var userPhoneV = userPhone.value;
    var userPhoneL = userPhoneV.length;
    if (userPhoneV.match(phone) && userPhoneL === 9) {
        userPhoneValidate = true;
        if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
            submitStepTwoBtn.disabled = false;
        }
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            return
        } else {
            mensageElement.classList.add("error-hiden");
        }
    } else {
        var mensageElement = document.querySelector('[id~=error-'+ e.target.id +']');
        if (mensageElement.classList.contains("error-hiden")) {
            mensageElement.classList.remove("error-hiden");
        } else {
            return
        }
        userPhoneValidate = false;
    }
}

//Functions to Event Listeners step 3
function calculateDate (e) {
    delivery.style.display = "block";

    document.getElementById("step-4").disabled = false;

    var month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    if (e.target.id === "Free") {
        product.shippingOption = "Free shipping (72h): 0.00 €";
        minimumDate.setTime(todayms + freeDuration);
        maximumDate.setTime(todayms + freeDuration + plusTime);
        minimundate.innerHTML = minimumDate.getDate() + " de " + month[minimumDate.getMonth()] + " de " + minimumDate.getFullYear() + " " + minimumDate.getHours() + ":" + minimumDate.getMinutes() + "h";
        maximundate.innerHTML = maximumDate.getDate() + " de " + month[maximumDate.getMonth()] + " de " + maximumDate.getFullYear() + " " + maximumDate.getHours() + ":" + maximumDate.getMinutes() + "h";
    } else if (e.target.id === "Extra") {
        product.shippingOption = "Extra shipping (48h): 4.99 €";
        minimumDate.setTime(todayms + extraDuration);
        maximumDate.setTime(todayms + extraDuration + plusTime);
        minimundate.innerHTML = minimumDate.getDate() + " de " + month[minimumDate.getMonth()] + " de " + minimumDate.getFullYear() + " " + minimumDate.getHours() + ":" + minimumDate.getMinutes() + "h";
        maximundate.innerHTML = maximumDate.getDate() + " de " + month[maximumDate.getMonth()] + " de " + maximumDate.getFullYear() + " " + maximumDate.getHours() + ":" + maximumDate.getMinutes() + "h";
    } else if (e.target.id === "Premium") {
        product.shippingOption = "Premium shipping (24h): 9.99 €";
        minimumDate.setTime(todayms + premiumDuration);
        maximumDate.setTime(todayms + premiumDuration + plusTime);
        minimundate.innerHTML = minimumDate.getDate() + " de " + month[minimumDate.getMonth()] + " de " + minimumDate.getFullYear() + " " + minimumDate.getHours() + ":" + minimumDate.getMinutes() + "h";
        maximundate.innerHTML = maximumDate.getDate() + " de " + month[maximumDate.getMonth()] + " de " + maximumDate.getFullYear() + " " + maximumDate.getHours() + ":" + maximumDate.getMinutes() + "h";
    }
}
function giftOptions () {
    if (document.getElementById("gift").checked) {
        document.getElementById("giftMenssage").style.display = "flex";
        document.getElementById("giftImage").style.display = "flex";
    } else {
        document.getElementById("giftMenssage").style.display = "none";
        document.getElementById("giftImage").style.display = "none";
    }
}
function hiddeDeliveri () {
    delivery.style.display = "none";
    document.getElementById("giftMenssage").style.display = "none";
    document.getElementById("giftImage").style.display = "none";
    document.getElementById("step-4").disabled = true;
}

//Functions to Event Listeners step 4
function acceptTerms() {
    if ( acceptTerm.checked ) {
        finalBuyButton.disabled = false;
    } else {
        finalBuyButton.disabled = true;
    }
}

/* Global functions to change between steps */

function inicioCompra() {
        if (sizeValidate === true) {
        buyButton.removeEventListener("click", inicioCompra);
        size.removeEventListener("blur", validateSize);
        size.removeEventListener("click", hideSizeError);
        product.price = price.textContent;
        product.size = size.value;
        product.color = miniatures[0].alt;
        //TODO: insertar temas de tiempo que se tarda en comprar.
        mainDiv.innerHTML = "";
        progressBar.classList.remove("progressBar-hide");
        mainDiv.innerHTML =`
        <div class="step-one" data-key="1">
            <div class="time-form time-form-hide" id="time-form-hide">
                <p>You started registering:</p>
                <span id="time-out"></span>
                <p>Hurry up!</p>
            </div>
            <form name="profile" class="form-step-one">
                <legend class="title-form-step-one">Profile</legend>
                <fieldset>
                    <label class="form-step-one-label" for="username">Username</label><br>
                    <input class="form-step-one-input" type="text" id="username" name="fname"><br>
                    <p class="error-msg error-hiden" id="error-username">Please enter the username</p>
                    <label class="form-step-one-label" for="email">Email</label><br>
                    <input class="form-step-one-input" type="email" id="email" name="email"><br>
                    <p class="error-msg error-hiden" id="error-email">Please enter the correct email</p>
                    <label class="form-step-one-label" for="password">Password</label><br>
                    <input class="form-step-one-input" type="password" id="password" name="password"><br>
                    <p class="error-msg error-hiden" id="error-password">Please enter the password</p>
                    <label class="form-step-one-label" for="confirmpass">Confirm password</label><br>
                    <input class="form-step-one-input" type="password" id="confirmpass" name="confirmpass">
                    <p class="error-msg error-hiden" id="error-confirmpass">Please enter the password</p>
                </fieldset>
                <fieldset class="buttons">
                    <button type="reset" id="clearBtn1" class="allButtons">Clear form</button>
                    <button class="submit-button allButtons" id="submitStepOneBtn" disabled>Next</button>
                </fieldset>
            </form>
        </div>`;

        userUsername = document.getElementById('username');
        userEmail = document.getElementById('email');
        userPassword = document.getElementById('password');
        userConfirmpass = document.getElementById('confirmpass');
        submitStepOneBtn = document.getElementById('submitStepOneBtn');
        clearButton1 = document.getElementById("clearBtn1")
        userUsername.addEventListener("click", hideError);
        userEmail.addEventListener("click", hideError);
        userPassword.addEventListener("click", hideError);
        userConfirmpass.addEventListener("click", hideError);
        userUsername.addEventListener("blur", validateUserName);
        userEmail.addEventListener("blur", validateUserEmail);
        userPassword.addEventListener("blur", validateUserPassword);
        userConfirmpass.addEventListener("blur", validateConfirmPassword);
        submitStepOneBtn.addEventListener("click", goStep2);
        clearButton1.addEventListener("click", clearForm1);
    } else {
        sizeError.classList.remove("error-hiden");
    }
}
function goStep2() {
    if (usernameValidate === true && emailValidate === true && passwordValidate === true && confirmpasswordValidate === true) {
        userUsername.removeEventListener("click", hideError);
        userEmail.removeEventListener("click", hideError);
        userPassword.removeEventListener("click", hideError);
        userConfirmpass.removeEventListener("click", hideError);
        userUsername.removeEventListener("blur", validateUserName);
        userEmail.removeEventListener("blur", validateUserEmail);
        userPassword.removeEventListener("blur", validateUserPassword);
        userConfirmpass.removeEventListener("blur", validateConfirmPassword);
        submitStepOneBtn.removeEventListener("click", goStep2);
        clearButton1.removeEventListener("click", clearForm1);
        buyButton.removeEventListener("click", timeOut);

        progressBar2.classList.add("progressBar-active");

        mainDiv.innerHTML = "";
        mainDiv.innerHTML = `
        <div class="time-form time-form-hide"  id="time-form-hide">
            <p>You started registering:</p>
            <span id="time-out">1 minute 30 second ago</span>
            <p>Hurry up!</p>
        </div>
        <form name="adress" class="step2-form">
            <legend class="title-form">Address</legend>
            <fieldset>
                <lable for="fName" class="form-lable">First Name</lable>
                <input type="text" id="fName" class="form-imput" maxlength="20">
                <p class="error-msg error-hiden" id="error-fName">Please enter a valid name</p>
                <lable for="lName" class="form-lable">Last Name</lable>
                <input type="text" id="lName" class="form-imput" maxlength="20">
                <p class="error-msg error-hiden" id="error-lName">Please enter a valid last name</p>
                <lable for="birthday" class="form-lable">Birthday</lable>
                <input type="date" id="birthday" class="form-imput">
                <p class="error-msg error-hiden" id="error-birthday">Please enter a valid birthday date</p>
                <lable for="adress1" class="form-lable">Adress 1</lable>
                <input type="text" id="adress1" class="form-imput" maxlength="50">
                <p class="error-msg error-hiden" id="error-adress1">Please enter a valid adress</p>
                <lable for="adress2" class="form-lable">Adress 2</lable>
                <input type="text" id="adress2" class="form-imput" maxlength="50">
                <lable for="postalcode error-hiden" class="form-lable">Postal code</lable>
                <input type="number" id="postalcode" class="form-imput">
                <p class="error-msg error-hiden" id="error-postalcode">Please enter a valid postal code</p>
                <lable for="country" class="form-lable">Country</lable>
                <select name="country" id="country" class="form-imput">
                    <option value="andorra">Andorra</option>
                    <option value="spain">Spain</option>
                    <option value="france">France</option>
                    <option value="germany">Germany</option>
                    <option value="greece">Greece</option>
                    <option value="default" selected></option>
                </select>
                <p class="error-msg error-hiden" id="error-country">Please select a country</p>
                <lable for="countryp" class="form-lable">Country prefix</lable>
                <select name="countryp" id="countryp" class="form-imput">
                    <option value="376" id="andorra">AND</option>
                    <option value="34" id="spain">SPA</option>
                    <option value="33" id="france">FRA</option>
                    <option value="49" id="germany">DEU</option>
                    <option value="30" id="greece">GRC</option>
                    <option value="default" selected></option>
                </select>
                <p class="error-msg error-hiden" id="error-countryp">Please select a country prefix</p>
                <label for="tNumber" class="form-lable">Phone</label>
                <input type="number" id="tNumber" class="from-imput">
                <p class="error-msg error-hiden" id="error-tNumber">Please enter a valid telephone number</p>
                <fieldset class="form-imput--checkbox">
                    <input type="checkbox" id="regularA">
                    <lable for="regularA" class="form-lable">This is my regular adress</lable>
                </fieldset>
            </fieldset>
            <fieldset class="buttons">
                <button type="reset" id="clearBtn2" class="allButtons">Clear form</button>
                <button class="submit-button allButtons" id="submitStepTwoBtn" disabled>Next</button>
            </fieldset>
        </form>`;

        userFName = document.getElementById("fName");
        userLName = document.getElementById("lName");
        userBirthday = document.getElementById("birthday");
        userAdress = document.getElementById("adress1");
        userPostalcode = document.getElementById("postalcode");
        userCountry = document.getElementById("country");
        userCountryP = document.getElementById("countryp");
        userPhone = document.getElementById('tNumber');
        submitStepTwoBtn = document.getElementById("submitStepTwoBtn");
        clearButton2 = document.getElementById("clearBtn2");

        userFName.addEventListener("blur", validateUserFName);
        userFName.addEventListener("click", hideError);
        userLName.addEventListener("blur", validateUserLName);
        userLName.addEventListener("click", hideError);
        userBirthday.addEventListener("blur", validateUserBirthday);
        userBirthday.addEventListener("click", hideError);
        userAdress.addEventListener("blur", validateUserAdress);
        userAdress.addEventListener("click", hideError);
        userPostalcode.addEventListener("blur", validateUserPostalcode);
        userPostalcode.addEventListener("click", hideError);
        userCountry.addEventListener("blur", validateUserCountry);
        userCountry.addEventListener("click", hideError);
        userCountryP.addEventListener("blur", validateUserCountryP);
        userCountryP.addEventListener("click", hideError);
        userPhone.addEventListener("blur", validateUserPhone);
        userPhone.addEventListener("click", hideError);
        submitStepTwoBtn.addEventListener("click", goStep3);
        clearButton2.addEventListener("click", clearForm2);

    } else {
        inicioCompra();
    }
}
function goStep3() {
    if (userFNameValidate === true && userLNameValidate === true && userBirthdayValidate === true && userAdressValidate === true && userPostalCodeValidate === true && userCountryValidate === true && userPhoneValidate === true) {
        userFName.removeEventListener("blur", validateUserFName);
        userFName.removeEventListener("click", hideError);
        userLName.removeEventListener("blur", validateUserLName);
        userLName.removeEventListener("click", hideError);
        userBirthday.removeEventListener("blur", validateUserBirthday);
        userBirthday.removeEventListener("click", hideError);
        userAdress.removeEventListener("blur", validateUserAdress);
        userAdress.removeEventListener("click", hideError);
        userPostalcode.removeEventListener("blur", validateUserPostalcode);
        userPostalcode.removeEventListener("click", hideError);
        userCountry.removeEventListener("blur", validateUserCountry);
        userCountry.removeEventListener("click", hideError);
        userCountryP.removeEventListener("blur", validateUserCountryP);
        userCountryP.removeEventListener("click", hideError);
        userPhone.removeEventListener("blur", validateUserPhone);
        userPhone.removeEventListener("click", hideError);
        submitStepTwoBtn.removeEventListener("click", goStep3);
        clearButton2.removeEventListener("click", clearForm2);

        progressBar3.classList.add("progressBar-active");

        mainDiv.innerHTML = "";
        mainDiv.innerHTML = `
        <div class="time-form time-form-hide" id="time-form-hide">
            <p>You started registering:</p>
            <span id="time-out">1 minute 30 second ago</span>
            <p>Hurry up!</p>
        </div>
        <form action="">
            <fieldset class="Step3">
                <legend>Shipping</legend>
                <fieldset class="ShippingType">
                    <legend>Shipping Type</legend>
                    <div class="shipping-type-free">
                        <input type="radio" name="shipping-type" id="Free">
                        <label for="Free">Free shipping (72h)</label>
                    </div>
                    <div class="shipping-type-extra">
                        <input type="radio" name="shipping-type" id="Extra">
                        <label for="Extra">Extra shopping (48h) <span>4.99 €</span> </label>
                    </div>
                    <div class="shipping-type-premium">
                        <input type="radio" name="shipping-type" id="Premium">
                        <label for="Premium">Premium (24h) <span>9.99 €</span> </label>
                    </div>
                    <div id="arriveInformation">
                    <h4>ESTIMATE DELIVERY DATE:</h4>
                    <div>Between <span id="startdate"></span> and <span id="enddate"></span> </div>
                    </div>
                    <div class="gift">
                        <input type="checkbox" name="gift" id="gift">
                        <label for="gift">Is it a gift?</label>
                    </div>
                    <div id="giftMenssage">
                        <label for="giftmessage">Gift message</label>
                        <textarea name="giftmessage" id="giftmessage" rows="4" cols="10" maxlength="200"></textarea>
                    </div>
                    <div id="giftImage">
                        <p class="gift-wrapper-img-title">Gift wrapper image</p>
                        <label for="giftimage">Select image<i class="fa fa-file-picture-o"></i></label>
                        <input type="file" name="giftimage" id="giftimage" accept="image/png, image/jpeg" class="inputfile">
                    </div>
                </fieldset>
            </fieldset>
            <fieldset class="buttons">
                <button type="reset" id="reset" class="allButtons">Clear form</button>
                <button id="step-4" disabled class="allButtons">Next</button>
            </fieldset>
        </form>`;

        shippingtypes = document.querySelectorAll("input[type='radio']");
        minimundate = document.getElementById("startdate");
        maximundate = document.getElementById("enddate");
        isGift = document.getElementById("gift");
        resetButton = document.getElementById("reset");
        submitStepThreeBtn = document.getElementById("step-4");
        delivery = document.getElementById("arriveInformation");

        shippingtypes.forEach(element => {
            element.addEventListener("click", calculateDate);
        });
        isGift.addEventListener("click", giftOptions);
        resetButton.addEventListener("click",  hiddeDeliveri);
        submitStepThreeBtn.addEventListener("click", goStep4);

        today = new Date ();
        todayms = today.getTime ();
        dia = 24 * 60 * 60 * 1000;
        plusTime = 6*60*60*1000;
        freeDuration = 3*dia;
        extraDuration = 2*dia;
        premiumDuration = dia;
        minimumDate = new Date ();
        maximumDate = new Date ();

    } else {
        goStep2();
    }
}
function goStep4() {
    product.deliveryDate = delivery.innerHTML;

    shippingtypes.forEach(element => {
        element.removeEventListener("click", calculateDate);
    });
    isGift.removeEventListener("click", giftOptions);
    resetButton.removeEventListener("click",  hiddeDeliveri);
    submitStepThreeBtn.removeEventListener("click", goStep4);

    progressBar4.classList.add("progressBar-active");

    mainDiv.innerHTML = "";
    mainDiv.innerHTML = `
    <section id="order-complete" class="resume-order">
        <div class="wrapper">
            <div class="time-form time-form-hide" id="time-form-hide">
                <p>You started registering:</p>
                <span id="time-out"></span>
                <p>Hurry up!</p>
            </div>
            <div class="order-complete-payment">
                <div class="payment-header">
                    <h3>Your order</h3>
                </div>
                <div class="payment-body">
                    <p><span class="label">Shoes </span><span id="product-price"></span></p>
                    <p id="product-shipping"></p>
                </div>
                <div class="payment-footer">
                    <p><span class="label">Total </span><span id="product-price-total"></span></p>
                </div>
            </div>
            <div class="order-complete-product">
                <div class="product-header">
                    <h2>Your purchase</h2>
                </div>
                <div class="product-body">
                    <div class="product-body-img">
                        <img src="" alt="" id="product-image">
                    </div>
                    <div class="product-body-details">
                        <h3>Nike Downshifter 10</h3>
                        <p><span class="label">Size </span><span id="product-size" class="product-size"></span></p>
                        <div id="arriveInformationF"></div>
                    </div>
                </div>
                <form>
                <input type="checkbox" id="term" name="term">
                <label for="term">I have read and I accept the terms and conditions.</label>
                <p class="error-msg error-hiden" id="error">Please accept the terms and conditions</p>
                <button id="final-buy-btn" class="allButtons" disabled>Buy Now</button>
                </form>
            </div>
        </div>
    </section>`;

    deliveryDate = document.getElementById('arriveInformationF');
    productImg = document.getElementById('product-image');
    productSize = document.getElementById('product-size');
    productPrice = document.getElementById('product-price');
    productShipping = document.getElementById('product-shipping');
    productPriceTotal = document.getElementById('product-price-total');
    acceptTerm = document.getElementById('term');
    finalBuyButton = document.getElementById('final-buy-btn');

    acceptTerm.addEventListener("click", acceptTerms);
    finalBuyButton.addEventListener("click", goFinalPage);

    deliveryDate.innerHTML = product.deliveryDate;
    productImg.src = product.color;
    productSize.innerText = product.size;
    productPrice.innerText = product.price;
    productShipping.innerText = product.shippingOption;
    shippingPriceString = product.shippingOption.slice(-7,-1);
    shippingPrice = parseFloat(shippingPriceString);
    productPriceTotal.innerText = (parseFloat(product.price) + shippingPrice).toFixed(2) + " €";
}
function goFinalPage() {
    var timeToProcesate = elapsedTime;
    clearInterval(countSecond);
    clearInterval(countTime);
    acceptTerm.removeEventListener("click", acceptTerms);
    finalBuyButton.removeEventListener("click", goFinalPage);

    progressBar.classList.add("progressBar-hide");

    mainDiv.innerHTML = "";
    mainDiv.innerHTML = `
    <section id="order-complete" class="resume-order">
        <div class="wrapper">
            <div class="order-complete-payment">
                <div class="payment-header">
                    <h3>Thanks for your order!</h3>
                </div>
                <div class="payment-body">
                    <p><span class="label">Shoes </span><span id="product-price"></span></p>
                    <p id="product-shipping"></p>
                </div>
                <div class="payment-footer">
                    <p><span class="label">Total </span><span id="product-price-total"></span></p>
                </div>
            </div>
            <div class="order-complete-product">
                <div class="product-header">
                    <h2>Your purchase</h2>
                </div>
                <div class="product-body">
                    <div class="product-body-img">
                        <img src="" alt="" id="product-image">
                    </div>
                    <div class="product-body-details">
                        <h3>Nike Downshifter 10</h3>
                        <p><span class="label">Size </span><span id="product-size" class="product-size"></span></p>
                        <div id="arriveInformationF"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="total-time" id="total-time-elapsed"></div>
    </section>`;

    deliveryDate = document.getElementById('arriveInformationF');
    productImg = document.getElementById('product-image');
    productSize = document.getElementById('product-size');
    productPrice = document.getElementById('product-price');
    productShipping = document.getElementById('product-shipping');
    productPriceTotal = document.getElementById('product-price-total');
    registrationTime = document.getElementById('total-time-elapsed');

    deliveryDate.innerHTML = product.deliveryDate;
    productImg.src = product.color;
    productSize.innerText = product.size;
    productPrice.innerText = product.price;
    productShipping.innerText = product.shippingOption;
    shippingPriceString = product.shippingOption.slice(-7,-1);
    shippingPrice = parseFloat(shippingPriceString);
    productPriceTotal.innerText = (parseFloat(product.price) + shippingPrice).toFixed(2) + " €";
    registrationTime.innerHTML = `<p>Your registration took:<span class="elapsed-time" id="elpased-time"></span></p>`;
    elapsedTime = document.getElementById('elpased-time');
    elapsedTime.innerText = " " + ((timeToProcesate / 60).toFixed(0)) + " minutes, " + (timeToProcesate % 60) + " seconds.";
}

function timeOut () {
    elapsedTime = 0;
    count = 0;
    countSecond = setInterval(function() {
        elapsedTime ++;
        console.log(elapsedTime);
    },1000);
    countTime = setInterval (function () {
        count++;
        timeOut = document.getElementById('time-out');
        timeOutForm = document.getElementById('time-form-hide');
        timeOut.innerText = count + "  minute ago";
        timeOutForm.classList.remove("time-form-hide");
        setTimeout(hideAgain, 5000);
        if (count === 5) {
            location.reload();
        }
    }, 60000);
}
function hideAgain() {
    timeOutForm = document.getElementById('time-form-hide');
    timeOutForm.classList.add("time-form-hide");
}
