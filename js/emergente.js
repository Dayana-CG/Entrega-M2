const formu = document.getElementById("emergente");
const rutN = document.getElementById("rut");
const nombreN = document.getElementById("nombre");
const bancoN = document.getElementById("banco");
const tcuentaN = document.getElementById("tcuenta");
const ncuentaN = document.getElementById("ncuenta");
const ncelularN = document.getElementById("ncelular");

function guardar() {
    
    console.log(rutN.value);
    console.log(nombreN.value);
    console.log(bancoN.value);
    console.log(tcuentaN.value);
    console.log(ncelularN.value);

    if (rutN.value !== "" && nombreN.value !== "" && bancoN.value !== "" && tcuentaN.value !== "" && ncuentaN.value !== "" && ncelularN.value !== "") {
        document.getElementById("nuevo").style.display='block';
        document.getElementById("nuevo").innerHTML = "Datos Guardados &#128522;";
        closeForm();
        
    } else {
        alert("Ingrese los datos, son obligatorios")
    }

}

