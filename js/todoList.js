class TodoList {
    constructor() {
        this.todoList = document.getElementsByClassName("todo-item-list")[0]
        this.startListenTasks()
    }

    startListenTasks() {
        let form = document.getElementById("todo-list-form")
        form.onsubmit = function (){
            let input = document.getElementById("todo-list-input")
            alert(input.value)
        }
    }

    printListFromStorage() {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            let taskContent = localStorage.getItem(key)
            let task = this.createItemHtml(taskContent)
            this.todoList.appendChild(task)
        }
    }

    createItemHtml(content) {
        let li = document.createElement("li")
        li.classList.add("todo-item__undone")
        li.innerText = content
        let deleteButton = document.createElement("button")
        deleteButton.innerText = "&#10008;"
        deleteButton.classList.add("delete-item-button")
        deleteButton.classList.add("delete-item-button-not-displayed")
        li.appendChild(deleteButton)
        return li
    }

    saveInStorage(con) {

    }
}

localStorage.setItem("1", "TEST")
todoList = new TodoList()
todoList.printListFromStorage()