const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
submitOk = 0;


wrapper.classList.add('active-popup');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

loginBtn.addEventListener('click', () => {
    var inputEmail = document.getElementsByClassName("input-box")[0].querySelector("input[type=email]").value;
    var inputPassword = document.getElementsByClassName("input-box")[1].querySelector("input[type=password]").value;
    wrapper.classList.remove('active-popup');
})

//registerBtn.addEventListener('click', () => {
//   var registerEmail = document.getElementsByClassName("input-box")[2].querySelector("input[type=email]").value;
//    var registerPassword = document.getElementsByClassName("input-box")[3].querySelector("input[type=password]").value;
//    var salt = generateSalt();
//    var password = sjcl.hash.sha256.hash(registerPassword + salt);
//    console.alert(password);
//    wrapper.classList.remove('active-popup');
//})

function navFunction() {
    var c = document.getElementById("Topnav");
    if (x.className === "navigation") {
        x.className += " responsive";
    } else {
        x.className = "navigation";
    }
}