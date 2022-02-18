//Estructura de control else-if funciona para que un programa ejecute instrucciones cuando se cumple una condicion y si la condicion no se cumple pueda ejecutar otras condiciones diferentes para el mismo dato.

//ejemplo: si la edad es menor a 10 es niño
//         si la edad es mayor a 10 y menor a 17 es un adolecente
//         si la edad es mayor o igual 18 es un adulto.

var edad = 19;

if (edad <= 10) {
    console.log("Es un niño");
}else if(edad > 10 && edad <= 17){
    console.log("Es un adolecente");
}else if(edad >= 18){
    console.log("Es un adulto");
}else{
    console.log("Ingrese una edad valida")
}

//ejercicio: Realizar un programa que calcule el indice de masa corporal (IMC).

var peso = 79;
var altura = 1.77;
var IMC = peso / ( altura * altura );
console.log(IMC);

if(IMC > 18.5 && IMC < 24.99){
    console.log("Tu peso es normal");
}else if(IMC > 24.99 && IMC < 29.99){
    console.log("Tienes sobre peso")
}else if(IMC > 30){
    console.log("Tienes obesidad");
}else{
    console.log("Ingrese un dato correcto");
}

//ejercicio: culpable o no

var culpable = "Si";
console.log(culpable);

if (culpable == "si" || culpable == "SI" || culpable == "Si") {
    console.log("Iras a la carcel");
}else if(culpable == "no" || culpable == "NO" || culpable == "No"){
    console.log("Retirate a tu casa");
}else{
    console.log("Ingresa un valor correcto");
}





