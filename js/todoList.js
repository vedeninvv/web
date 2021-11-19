class TodoList {
    static lastTodoList;

    constructor() {
        if (TodoList.lastTodoList === undefined) {
            this.todoList = document.getElementsByClassName("todo-item-list")[0]
            TodoList.lastTodoList = this
            this.startListenTasks()
        }
        TodoList.lastTodoList.printListFromStorage()
    }

    startListenTasks() {
        function listen() {
            let input = document.getElementById("todo-list-input")
            localStorage.setItem(localStorage.length.toString(), input.value)
            TodoList.lastTodoList.printListFromStorage()
            return false
        }

        let form = document.getElementById("todo-list-form")
        form.onsubmit = listen
    }

    printListFromStorage() {
        this.todoList.innerHTML = ""
        let keys = []
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            keys.push(key)
        }
        keys.sort()
        for (let i = 0; i < localStorage.length; i++) {
            let key = keys[i]
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
}

todoList = new TodoList()