//Codigo realizado por: Alejandro Cuevas y Carlos Herrera

let registros=[ ]

module.exports.registros = registros;


    function agregarRegistro(){

        var nombre=document.getElementById("nombre").value;
        var apellido=document.getElementById("apellido").value;
        var telefono=document.getElementById("telefono").value;
        var correo=document.getElementById("correo").value;
        var contrasena=document.getElementById("contrasena").value;

    

        registros.push(
            {nombre,apellido,telefono,correo,contrasena}
            );
            console.log(registros);

            return agregarRegistro;
    }
    module.exports.agregarRegistro=agregarRegistro;


