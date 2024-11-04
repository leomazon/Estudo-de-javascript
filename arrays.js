const vetor = ["A", 10, "Cão", 1.5, true];

const numeros = [1, 2, 3, 4, 5, 6];
const frutas = ["maças", "bananas", "laranjas", "abacaxi"]

// Obter um valor
console.log(frutas[0]);
console.log(frutas[1]);

// Adicionar um elemento
frutas[4] = "melancia";

// Alterar um elemento
frutas[1] = "limão";

// Adicionar um elemento ao fim de um vetor
frutas.push("morangos");

// Adicionar um elemento ao inicio de um vetor
frutas.unshift("mangas");

const frutaRemovida = frutas.pop();

const frutaRemovida2 = frutas.shift();

console.log(frutas.indexOf("limão"));

console.log(Array.isArray(frutas));
console.log(Array.isArray(50)); 



console.log(frutas)
console.log(frutaRemovida)
