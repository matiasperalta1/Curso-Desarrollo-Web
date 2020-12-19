// Debemos devolver un arreglo que posea el cuadrado de todos los números POSITIVOS
// que se pasa como parámetro en forma de arreglo. El arreglo final debe estar ordenado de menor a mayor.

//Si yo envio [-1,9,7] me devuelve [49,81]

// Debemos también respetar:
// 1. Especificaciones de ES6.
// 2. Mantener el arreglo original inmutable (no realizar cambios en el mismo)
// 3. NO ESTÁ permitido utilizar ningún for o while (ni ninguna de sus variaciones)

const squareList = (arr) => {
	// Only change code below this line
	let positiveNumbers = arr.filter(number => number > 0 );
	const result = positiveNumbers.map((val) => val ** 2);
	return result;
	// Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);

