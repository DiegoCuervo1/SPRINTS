let registros = [];



function login() {
    const nombre = document.getElementById("nombre").value;
    const contrasena = document.getElementById("contrasena").value;
    if (/^([a-zA-Z]{4,30})+$/.test(nombre)) {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&]{8,}[^'\s]+$/.test(contrasena)) {
            if (validarCAPTCHA(registros) == true) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function agregarResgitro() {
    var nombre = document.getElementById("nombre").value;
    var contrasena = document.getElementById("contrasena").value;
    //var captcha=document.getElementById("captcha").value;
    var pushregistro = registros.push({ nombre, contrasena });
    return pushregistro;
}

function validarCAPTCHA(valor) {
    if (registros.captcha == 1000) {
        return true;
    } else {
        return false;
    }
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarResgitro = agregarResgitro;