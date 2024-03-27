
const formulario = document.getElementById("login-form");
const rut = document.getElementById("uno");
const nombre = document.getElementById("dos");
const correo = document.getElementById("tres");
const celu = document.getElementById("cuatro");

function nuevo(event) {
    event.preventDefault();
    console.log(uno.value);
    console.log(dos.value);
    console.log(tres.value);
     
    if(rut.value !== "" && nombre.value !=="" && correo.value !== "" && celu.vale !== ""){
        document.getElementById("demo").style.display='block';
        document.getElementById("demo").innerHTML = "&#128521; Regristo OK!"
        
    }else{
        document.getElementById("demo").style.display='block';
        document.getElementById("demo").innerHTML = "&#9995; Ingresa todos los campos";
       }
            
    }
// cierre
// asociar la Funcion al Formulario
document.addEventListener("submit", nuevo);