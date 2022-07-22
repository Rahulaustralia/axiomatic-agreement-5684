let btn2 = document.querySelector("#btn2 button");

let signupLS = JSON.parse(localStorage.getItem("signupData")) || [];

btn2.addEventListener("click", signupFunc)

function signupFunc(event) {
    event.preventDefault();
    let userObj = {
            number: document.querySelector("#MNumber").value,
            password: document.querySelector("#Pass").value,
        }
        // console.log(userObj)
    signupLS.push(userObj);
    localStorage.setItem("signupData", JSON.stringify(signupLS));
    prompt("Enter The OTP");
    alert("signup Sucessfull");
    window.location.href = "login.html";

}