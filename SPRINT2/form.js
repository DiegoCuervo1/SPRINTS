const nombre=document.getElementById("nombre");
function checkNombre(nombre){
      if (/^([a-zA-Z]{4,30})+$/.test(nombre)) {
          return true;   
      }else{
        
        return false;
      }
      
  }
 
  module.exports.checkNombre=checkNombre;

  var apellido=document.getElementById("apellido");
 function checkApellido(apellido){
      if (/^([a-zA-Z]{4,30})+$/.test(apellido)) {
          return true;  
      }else{
           return false;
          
      }
  }


  module.exports.checkApellido=checkApellido;
  
 var telefono=document.getElementById("telefono");
 
 function checkTelefono(telefono){
      if (/^([0-9]{7})+$/.test(telefono)) {  
        return true;   
      }else{ 
         return false;
      }  
  }
  module.exports.checkTelefono = checkTelefono;
  
  var correo = document.getElementById("correo");
function checkCorreo(correo){
    if (/^\D[a-zA-Z0-9_-]+\@+[a-zA-Z]+(\.+[a-zA-Z]+)?(\.+([a-zA-Z])+)?(\.+([a-zA-Z])+)?\.([a-zA-Z]{2,3})+$/.test(correo)) {
      return true;    
       
    }else{
      return false;
    }
  return n;
    
}
module.exports.checkCorreo = checkCorreo;

var contrasena=document.getElementById("contrasena");
 function checkContrasena(contrasena){
      if ( /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d$@$!%*?&]{8,}[^'\s]+$/.test(contrasena)) {
        return true;   
      }else{
          return false;
      }
      
  }
  module.exports.checkContrasena = checkContrasena;