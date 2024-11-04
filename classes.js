// Funcão construtora
// function Person(firstName, lastName, birthDate) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthDate = new Date(birthDate);

//     this.getFullName = () => {
//         return `${firstName} ${lastName};`
//     }
// }

// Classe ES6
class Person {
    constructor(firstName, lastName, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = new Date(birthDate);
    } 

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}

const person1 = new Person("João", "Silva", "7-7-99")
console.log(person1)

class Client extends Person {
    constructor(firstName, lastName, birthDate, balance) {
        super(firstName, lastName, birthDate);
        this.balance = balance;
    }
}

const cliente1 = new Client("Pedro", "Mazon", "1-1-90", 1000);
console.log(cliente1);
console.log(cliente1.firstName);
console.log(cliente1.lastName);
console.log(cliente1.birthDate);
console.log(cliente1.getFullName());

class Carro {
    constructor(nome, marca, valor) {
        this.nome = nome;
        this.marca = marca;
        this.valor = valor;
    }
}

const carro1 = new Carro("Gol", "Wolksvagem", 5000);
console.log(carro1);


const honda = new Carro();