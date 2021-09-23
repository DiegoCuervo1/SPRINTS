function checkNombre(valor) {
    var resc = /^[a-zA-Z]{4,30}$/;
    if (resc.test(valor)) {
        return true;
    } else {
        return false;
    }
}
exports = checkNombre;


function checkApellido(valor) {
    var resc = /^[a-zA-Z]{4,30}$/;
    if (resc.test(valor)) {
        return true;
    } else {
        return false;
    }
}
exports = checkApellido;


function checkTelefono(valor) {
    var resc = /^[0-9]{7}$/;
    if (resc.test(valor)) {
        return true;
    } else {
        return false;
    }
}
exports = checkTelefono;


function checkCorreo(valor) {
    var resc = /^\D[a-zA-Z0-9_-]+\@+[a-zA-Z]+(\.+[a-zA-Z]+)?(\.+([a-zA-Z])+)?(\.+([a-zA-Z])+)?\.([a-zA-Z]{2,3})$/;
    if (resc.test(valor)) {
        return true;
    } else {
        return false;
    }
}
exports = checkCorreo;


function checkContrasena(valor) {
    var resc = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&]{8,}[^'\s]$/;
    if (resc.test(valor)) {
        return true;
    } else {
        return false;
    }
}
exports = checkContrasena;