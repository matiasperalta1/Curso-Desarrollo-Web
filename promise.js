//Escribir una promesa que escriba en consola el resultado de una promesa fallida o de una promesa cumplida. 
//La promesa será cumplida si el número aleatorio es menor que 0.8  e incumplida si es mayor.
//Consejo: antes de realizar la comparativa, guardar el valor en una variable y realizar un console.log() 
//para ver si el resultado de la promesa (sea resuelto o rechazado) es correcto.
//Usar la función Math.random() para obtener el número aleatorio.

const result = new Promise((resolved, rejected) => {
        let nro = Math.random();
        console.log(nro);
        if (nro < 0.8) {
            resolved("Good luck");
        } else {
            rejected('Bad luck');
        }
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
console.log(result);