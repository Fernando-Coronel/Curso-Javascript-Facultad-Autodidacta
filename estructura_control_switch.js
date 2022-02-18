//Estructura de control switch

var numero1 = 10;
var numero2 = 5;
var tipoOperacion = "multiplicacion";

switch (tipoOperacion) {
    case "suma":
        console.log("La suma es: " + ( numero1 + numero2));
        break;
    case "resta":
        console.log("La resta es: " + (numero1 - numero2));
        break;    
    case "division":
        console.log("La division es: " + (numero1 / numero2));
        break;
    case "multiplicacion":
        console.log("La multiplicacion es: " + (numero1 * numero2));
        break;
    default:
        console.log("No ingresaste un valor correcto");
        break;
}