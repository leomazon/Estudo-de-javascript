const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (number) {
    console.log(number);
})

const letters = ["A", "B", "C", "D", "E"]

letters.forEach(function (letter, index) {
    console.log(`${index}: ${letter}`);
});

const tasks = [
    {
        id: 1,
        task: "Estudar",
        completed: false,
    },
    {
        id: 2,
        task: "Trabalhar",
        completed: false,
    },
    {
        id: 3,
        task: "Limpar a casa",
        completed: true,
    }
]

tasks.forEach(function (tasks, index, myTasks) {
    console.log(`${index + 1}: ${tasks.task}`);
    console.log(myTasks);
});

const vetorDeTextosDasTarefas = tasks.map(function (titulo) {
    return titulo.task;
});

console.log(vetorDeTextosDasTarefas)

const tarefa1 = tasks.filter(function (task) {
    return task.id === 1;
})

console.log(tarefa1)
