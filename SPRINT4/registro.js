//Codigo realizado por: Alejandro Cuevas y Carlos Herrera

let registros = []

module.exports.registros = registros;


function agregarRegistro() {

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;



    registros.push({ nombre, apellido, telefono, correo, contrasena });
    console.log(registros);

    return agregarRegistro;
}
module.exports.agregarRegistro = agregarRegistro;


//Código realizado por César Macea y Diego Cuervo

function ordenarArreglo(registros) {
    var objregistro = registros.sort((a, b) => {
        if (a.apellido < b.apellido) {
            return -1;
        } else if (a.apellido > b.apellido) {
            return 1;
        } else {
            return 0;
        }

    });
    //console.log(objregistro);
    return objregistro;
}

module.exports.ordenarArreglo = ordenarArreglo;

//Código realizado por Andrea Cristina Hernandez  y Bernardo Mira

function filtrarCorreo(registros){
    const b='gmail.com';
    var newcorreo =registros.filter((a)=>{
        
      if (/gmail.com/.test(a.correo)){
          return true;
      }else{
          return false;
      }
      
      
           
       
    });
    console.log(newcorreo);
    return newcorreo;
}

module.exports.filtrarCorreo=filtrarCorreo;
