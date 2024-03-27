

function deposito(event) {
    event.preventDefault();
    const formulario = document.getElementById("depo");
    const deposit = document.getElementById("montodepo");
    const tipocuenta = document.getElementById("form1");
    console.log(montodepo.value);
    console.log(form1.value);


    if (deposit.value !== "" && tipocuenta.value !== "") {
        document.getElementById("demo1").style.display = 'block';
        document.getElementById("demo1").innerHTML = "Depósito con exito &#128077;";


    } else {
        document.getElementById("demo1").style.display = 'block';
        document.getElementById("demo1").innerHTML = "Ingresa datos para el depósito &#128178;";
    }

}
// cierre
// asociar la Funcion al Formulario
document.addEventListener("submit", deposito);