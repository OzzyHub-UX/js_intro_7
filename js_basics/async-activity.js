

class Todo {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = this.description;
        this.creatAt = new Date();
    }
}
 
class TodoManager {
    constructor() {
        this.AllTodos = [];
    }
     createATodo(newToDo, callback) {
        setTimeout(() => {
            this.AllTodos.push(newToDo);
            callback('Successfully added new todo');
        }, 2000); 
     }
    }

const todoManager = new TodoManager();
todoManager.createATodo(new Todo(1, "Watch TV", "On weekend and this show"), (message) => {
    console.log(message);
    console.log(todoManager);
});


function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 11) + 10;
            resolve(randomNumber);
        }, 5000);
    });
}

getRandomNumber()
.then((number) => {
    if(number > 15) {
        console.log("Number is valid:", number);
    }
    else {
        console.log("Number is invalid:", number);
    }
})
.catch((error) => {
    console.error("Error:", error);
});