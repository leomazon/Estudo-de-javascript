// for (i = 0; i < 10; i++) {
//     console.log(`Número da repetição for: ${i}`)
// }

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

for (i = 0; i < tasks.length; i++) {
    console.log(`Tarefa ${i + 1}: ${tasks[i].task}`);
}

for (let x of tasks) {
    console.log(tasks.task);
}

