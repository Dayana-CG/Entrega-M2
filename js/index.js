const user1 = "joseneipan@ias.cl";
const clave1 = "123456";

const user2 = "isaiascarvajal@ias.cl";
const clave2 = "789100";

function login() {
	const user = document.querySelector('#user').value;
    const password = document.querySelector('#password').value;
	console.log('Usuario :', user);
	console.log('Clave :', password);

    if(user === user1 && password === clave1){
        alert("Bienvenid@ a tu sesión");
        location.href='/menu.html';
       
    }else if (user === user2 && password === clave2){
        alert("Bienvenid@ a tu sesión");
        location.href='/menu.html';
        } else   {
            alert("Datos no encontrados. Registrate con nosotros");
           }
        }
  
	

   