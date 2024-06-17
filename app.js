// uso recursividad para calcular el factorial de un numero
function calculoFactorial(numero){
    if (numero == 0 || numero == 1) {
        return 1;
    } else {
        return numero * calculoFactorial(numero - 1);  
    }
}

// funcion para mostrar el factorial del numero
function calcularFactorial(){
    // guardo el numero que ingresa el usuario en una variable 
    let numero = document.getElementById("numero").value;

    // guardar etiqueta p mediante el id 
    let factorial = document.getElementById("result-factorial");

    // realizar un casteo de tipo de dato String a tipo de dato number
    numero = parseFloat(numero);

    try {  

        if (isNaN(numero) || numero < 0) {
            throw new Error("Por favor, ingresa un número válido.");
        }else {
            let resultado = calculoFactorial(numero);
            factorial.textContent = "El factorial de " + numero + " es: " + resultado;    
            
            // Limpiar el input después de mostrar el resultado
            document.getElementById("numero").value = "";
        }
    } catch (error) {
        alert("ERROR! Ocurrio algo inesperado. " + error.message);

        // Limpiar el input después de mostrar el resultado
        document.getElementById("numero").value = "";
    }

}

