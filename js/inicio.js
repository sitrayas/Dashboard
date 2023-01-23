const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }

    console.log(data)
})


function login(){
var username, password

username= document.getElementById("username").value;
password=document.getElementById("password").value;

if (username == "grupo1" && password == "1"){

  window.location = "dashboard2.html";

}else {
alert( "Datos Invalidos")


}

}



