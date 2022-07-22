document.querySelector("#btn button").addEventListener("click", loginFunc)

let loginLS = JSON.parse(localStorage.getItem("loginData")) || [];

function loginFunc() {
    event.preventDefault();
    let newobj = {
        number: document.querySelector("#userid").value,
        password: document.querySelector("#userpass").value,
    }

    loginLS.push(newobj)
    localStorage.setItem("loginData", JSON.stringify(loginLS))

    let flag = false;
    loginLS.forEach(function(ele) {
        if (ele.number === newobj.number && ele.password === newobj.password) {
            flag = true;
            localStorage.setItem("login", JSON.stringify(ele));
            alert("Signup Sucessfully");
            window.location.href = "index.html";

        }

    });
    if (flag == false) {
        alert("User Doesnot Exist");
    }

}