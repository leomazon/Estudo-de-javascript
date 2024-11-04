const nome = "Leonardo";
const sobrenome = "Mazon";
const idade = 20;
const passatempos = ["música", "filmes", "estudar"];
const enderecoRua = "Luiz da costa manso";
const enderecoCidade = "Londrina";
const enderecoEstado = "PR";

const pessoa = {
    nome: "Leonardo",
    sobrenome: "Mazon",
    idade: 20,
    passatempos: ["música", "filmes", "estudar"],
    endereco: {
        rua: "Luiz da costa manso",
        cidade: "Londrina",
        estado: "PR"
    }
}

// Acessar uma propriedade
console.log(pessoa.nome);

// Acessar um elemento de uma propriedade vetor
console.log(pessoa.passatempos[2]);

// Acessar uma propriedade de outra propriedade
console.log(pessoa.endereco.estado);

// Definir uma nova propriedade
pessoa.email = "leonardo@gmail.com"
console.log(pessoa)

// Criar um vetor de objetos
const tasks = [
    {   
        id: 1,
        task: "Tirar o lixo",
        completed: false
    },

    {   
        id: 2,
        task: "Varrer o chão",
        completed: true
    },
    {
        id: 3,
        task: "Lavar o carro",
        completed: false
    }
]

// Acessar uma propriedade de um elemento específico
console.log(tasks[1].task);

// Formatar um objeto em formato JSON
console.log(JSON.stringify(pessoa));
console.log(JSON.stringify(tasks));
