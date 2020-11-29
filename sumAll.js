//Pasaremos un array de dos números. Devolver la suma de eso dos números junto con la suma de todos los números
//que se encuentran entre ellos. El número más pequeño NO SIEMPRE vendrá primero.

//Por ejemplo, sumAll([4,1]) debe devolver 10 porque esa es la sumatoria de
// los numeros entre 1 y 4 (con ellos inclusive)

//Debemos aplicar lo aprendido con ES6, a cumplir el código:
// 1) La función debe ser una arrow function.
// 2) Para obtener los valores del arreglo deberemos usar destructuring del arreglo.

// function sumAll(arr) {
// 	return 1;
// }

// const sumAll = (listNumbers) => {
//     listNumbers.length == 0 ?
//         const [first] = listNumbers;
//     const sumatoria = 0;
//     sumatoria = sumatoria + first;
//     listNumbers.shift();
//     return sumatoria;

// }

const sumAll = (listNumbers) => {
    const [first, second] = listNumbers;
    let suma = 0;
    if (first < second) {
        const l = second - first;
        for (let i = 0; i <= l; i++) {
            suma = suma + first + i;
        }
    } else {
        const l = first - second;
        for (let i = 0; i <= l; i++) {
            suma = suma + second + i;
        }
    }
    console.log(suma);
    return suma;

};


const sum = sumAll([7, 5]);
//console.log(suma);