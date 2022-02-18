//Operadores logicos funcionan para conbinar condiciones
//and: se cumple al menos si una condicion es verdadera
//or: solo la condicion sera falsa si las dos condiciones son falsas, las demas seran verdaderas
//not: si la condicion es falsa se hace positiva y visceversa

//ejemplo: una empresa contrata gente mayor de edad a 18 y del genero femenino

var edad = 17;
var genero = "F";
var contrato = true;

//doble ampersand sirve para and
if (edad >= 18 && genero == "F") {
    console.log("Contratada");
}else{
    console.log("No cumple algun requisito");
}

//doble pipe sirve para or
if (edad >= 18 || contrato) {
    console.log("Contratada");    
}else{
    console.log("No cumple algun requisito");
}

//signo de admiracion es para negacion
if (!contrato == true) {
    console.log("Contratada");
}else{
    console.log("No cumple algun requisito");
}