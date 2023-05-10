
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

let prestamos = [
    {
        nombre: 'nombre1',
        monto: 1000,
        cuotas: 9,
        pagoDeCuotas: 6,
    
    },
    {
        nombre: 'nombre2',
        monto: 5000,
        cuotas: 3,
        pagoDeCuotas: 1,
    
    },
    {
        nombre: 'nombre3',
        monto: 7500,
        cuotas: 7,
        pagoDeCuotas: 3,
    }
]

let consultasDePrestamos = {
    verPrestamos: (nombre) => {
        let buscarPrestamoPorNombre = prestamos.find(prestamo => prestamo.nombre === nombre);
        if(buscarPrestamoPorNombre === undefined){
            return null
        } else {
            return buscarPrestamoPorNombre
        }
    },

    eliminarPrestamo: (nombre) => {
        let eliminarPorNombre = prestamos.filter(prestamo => prestamo.nombre !== nombre);
        return eliminarPorNombre
    }

}

//console.log(consultasDePrestamos.verPrestamos('jorge'))
console.log(consultasDePrestamos.eliminarPrestamo('nombre1'))