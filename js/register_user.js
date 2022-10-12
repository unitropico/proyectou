import { registeruser } from "../js/firebase.js";

const evento = document.getElementById("registerbtn")

async function register(){

    const user = document.getElementById("edtuser").value
    const pass = document.getElementById("edtpassword").value

    const registro = registeruser(user,pass)
    const validation = await registro

    if(validation != null)
    {
        alert("User register succesfull "+user)
        window.location.href="../index.html"
    }
    else
    {
        console.log("Register "+user+"not validation")
        alert("Error de usuario verifique usuario y/o contraseña")
    }
}

window.addEventListener('DOMContentLoaded', async()=>{

    evento.addEventListener('click',register)
})