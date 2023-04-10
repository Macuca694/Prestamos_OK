
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
}

