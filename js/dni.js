
function averiguaLetra(){
    var array_letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E","T"];
    //recibe los datos del intez
    var dniCompleto = document.getElementById("dni").value;    
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var dniMayuscula = "";
    var comprobar = 0;
    var numerosDNI = 0;
    var letra = "";
    var resto;
    var contador = 0;
    var dniArray = dniCompleto.split("");
//calcula que el dni tenga los digitos que tiene que tener
    for(contador = 0; contador < dniArray.length; contador++){
        if(contador <= 7){
            if(isNaN(dniArray[contador])){
                comprobar = 1;
            }
        }
        else {
            if(isNaN(dniArray[8])){
                //Convierte las letras en mayuscula
                dniArray[8] = dniArray[8].toUpperCase();
            } else{
                comprobar = 1;
            }
        }
    }

    //Comporbar la longitud sea la correcta
    if(contador != 9){
        comprobar = 1;
    }else{
        dniMayuscula = dniArray.join("");
        //juntar los numeros 
        numerosDNI = dniMayuscula.substring(0,8);
        //Vamos a guardar la letra dni
        letra = dniMayuscula.substring(8,9);
        //comprueba que la letra sea la correcta
        resto = numerosDNI % 23;
        if(array_letras[resto] != letra){
            comprobar = 2;
        }
    }
    if(comprobar == 0){
        //**Imprime esta informacion si el dni es valido */
        document.getElementById("nombre_registro").innerHTML = nombre;
        document.getElementById("apellido_dni").innerHTML = apellido;
        document.getElementById("total_final").innerHTML = "El dni es valido";
    } 
    else if(comprobar == 1){
                //**Imprime esta informacion si el dni no es valido */

        document.getElementById("nombre_registro").innerHTML = nombre;
        document.getElementById("apellido_dni").innerHTML = apellido;
        document.getElementById("total_final").innerHTML = "El dni NO es valido";

    } else if(comprobar == 2){
                //**Imprime esta informacion si la letra del dni esta mal*/

        document.getElementById("nombre_registro").innerHTML = nombre;
        document.getElementById("apellido_dni").innerHTML = apellido;
        document.getElementById("total_final").innerHTML = "La letra de el dni no es valido";
    }


}
