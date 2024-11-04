const personA = {
    name: "Leonardo",
    lastName: "Mazon",
    birthDate: new Date("8-2-2004"),
    getCompletedName() {
        return `${this.name} ${this.lastName}`;
    }
}

const personB = {
    name: "Luiz",
    lastName: "Souza",
    birthDate: new Date("1-1-1999"),
}

// console.log(personA.name);
// console.log(personA.getCompletedName());


// Função construtura - constructor function
function person(firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = new Date(birthDate);
    this.friends = [];
    this.getFullYear = () => {
        return this.birthDate.getFullYear();
    };
    this.addFriend = (friend) => {

        if (!this.friends.includes(friend)) {
            this.friends.push(friend);   
            friend.friends.push(this);
        }  
    };

    this.selectFriends = () => {
        return this.friends.map((friend) => friend.getFullName())
    };

    this.getFullName = () => {
        return `${this.firstName} ${this.lastName}`;
    };
}

const person1 = new person("José", "Silva", "8-2-95");
const person2 = new person("Maria", "Santos", "8-2-90");
const person3 = new person("Carlos", "Pereira", "10-5-84");

console.log(person1);
console.log(person2);
console.log(person1.getFullYear());
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.getFullName());
person1.addFriend(person2)
person1.addFriend(person3)
console.log(`Amigos do (a) ${person1.firstName}`, person1.selectFriends());
console.log(`Amigos do (a) ${person2.firstName}`, person2.selectFriends());
console.log(`Amigos do (a) ${person3.firstName}`, person3.selectFriends());

// Construtores internos
const pedro = new String("Pedro");
console.log(typeof pedro);
console.log(typeof "Pedro");

const numero = new Number(5);
console.log(typeof numero);
console.log(typeof 5);






