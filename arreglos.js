//Arrays o arreglos 

var arreglo1 = [1,2,3,4,5];
var arreglo2 = ["a", "b", "c", "d", "e"];

console.log(arreglo1);
console.log(arreglo2);

//Para agregar algun elemento a un arreglo
arreglo1[5] = 6;
arreglo2[5] = "f";

console.log(arreglo1);
console.log(arreglo2);

//Para mostrar o recorrer un arreglo con bucle for

for (var index = 0; index < arreglo1.length; index++) {
    console.log("Posicion " + index);    
    console.log( arreglo1[index]);    
}

console.log("\n");

for (var index = 0; index < arreglo2.length; index++) {
    console.log("Posicion " + index);    
    console.log( arreglo2[index]);    
}