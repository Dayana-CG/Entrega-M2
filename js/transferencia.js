const formulario = document.getElementById("trans");
const trans = document.getElementById("form3");
const contacto = document.getElementById("buscar");

function transferencia(event) {
    event.preventDefault();
    console.log(form3.value);
    console.log(buscar.value);


    if (trans.value !== "" && contacto.value !== "") {
        document.getElementById("demo3").style.display = 'block';
        document.getElementById("demo3").innerHTML = "Transferencia con exito &#128077;";       
     
      
    } else {
        document.getElementById("demo3").style.display = 'block';
        document.getElementById("demo3").innerHTML = "Ingresa datos para Transferencia &#128178;";      
    }

}

document.addEventListener("submit", transferencia);