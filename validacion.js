function validar() {
var nombres, apellidos, correo;
Nombres = document.getElementById("validationDefault01").value;
Apellidos = document.getElementById("validationDefault02").value;
Correo = document.getElementById("validationCustom03").value;

expresion = /\w+@\w+\.+[a-z]/;

if(validationDefault01 === ""){
    alert("El campo Nombres es obligatorio")
    return false;
}

if(validationDefault02 === ""){
    alert("El campo Apellidos es obligatorio")
    return false;
}
else if(!expresion.test(validationCustom03)){
    alert("El Corre no es valido")
    return false;
}

if(validationCustom03 === ""){
    alert("El campo Correo es obligatorio")
    return false;
}
}


