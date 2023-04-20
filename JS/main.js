
let RESPUESTA = (prompt("¿Quieres sacar un préstamo?"));
console.log ("Qué ingresó el usuario", RESPUESTA);
const RESPUESTA_ELEGIDA = "SI"
if  (RESPUESTA .toUpperCase () == RESPUESTA_ELEGIDA) {
    alert ("Puedes ingresar al sitio");
    console.log ("Puedes ingresar al sitio");
}
else    {
    alert ("No puedes ingresar al sitio");
}  

// turno para que un asesor se contacte con el interesado
let numeroClientes = 5
for (let turno = 1; turno <= numeroClientes; turno++)  {
    let nombre = prompt ("¿Cuál es su nombre" + turno + "?");
    alert ("Perfecto, " + nombre + ", se le asignará el turno número"  +  turno + " para que un asesor se ponga en contacto");
    console.log ("Al cliente " + nombre + " le corresponde el turno número" + turno);
};

//Definición de características objeto//
let Nombre
let apellido
let edad
let cuil 

//creacion de molde//
let unCliente  =	{
 Nombre: "Griselda",
 apellido: "Gonzalez",
 edad:  "18",
 cuil:"27384119471", 
};

console.log ("el objeto se compone de estos datos", unCliente);
alert ("el objeto se compone de estos datos" + unCliente);

console.log ("El cliente" + unCliente.nombre + "será calificado para sacar un préstamo");
alert ("El cliente"+ unCliente + "se llama" ["nombre"]);

//Declaración de Arrays
const ARRAY_DE_NUMEROS = [10,20,30,40,50]
console.log ("Qué hay dentro del array en la posición 25?", ARRAY_DE_NUMEROS [25]);