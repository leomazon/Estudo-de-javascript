function areaQuadrada(lado) {
     const area = lado * lado;
     return area
}

console.log(areaQuadrada(5))

function pi() {
    return 3.14;
}

total = 5 * pi();
console.log(pi())

function imc(peso, altura) {
    const imc = peso / (altura * altura)
    return imc
}

console.log(imc(71, 1.76))

function corFavorita(cor) {
    if(cor === 'Azul') {
        return 'Eu gosto do céu';
    } else if(cor === 'Verde') {
        return 'Eu gosto de mato'
    } else {
        return 'Eu não gosto de cores'
    }
};

function mostraConsole() {
    console.log('Oi')
    
}

function dizerOla(nome) {
    console.log("Olá " + nome)
}

dizerOla("Pedro")
dizerOla("Carlos")
dizerOla("Luiz")

function seApresentar({nome, idade}) {
    console.log("Meu nome é " + nome + " e eu tenho " + idade + " anos");
}

seApresentar({
    nome: "Mazon",
    idade: 20,
})

function criarNomeCompleto({nome, sobrenome, sexo}) {
    if (sexo == "M" || "m") {
        return `Olá Sr. ${nome} ${sobrenome}`
    } else if(sexo == "F") {
        return `Olá Sra. ${nome} ${sobrenome}`
    } else {
        return `Olá ${nome} ${sobrenome}`;
    }
}

const nomeCompleto = criarNomeCompleto({
    nome: "Leonardo",
    sobrenome: "Mazon",
    sexo: "m"
})

const nomeCompleto2 = criarNomeCompleto({
    nome: "Josselina",
    sobrenome: "Da silva",
    sexo: "F"
})

const nomeCompleto3 = criarNomeCompleto({
    nome: "Elon",
    sobrenome: "Musk",
    sexo: "A"
})

console.log(nomeCompleto)
console.log(nomeCompleto2)
console.log(nomeCompleto3)

const dizerOi = () => {
    console.log("Oi");
}