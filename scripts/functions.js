const firstLoadUpdate = () => {
  for (let i = 0; i < myList.tasks.length; i++) {
    console.log(myList.tasks.length);

    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    if (myList.tasks[i].completed) {
      item.classList.add("completed");
      item.classList.remove("uncompleted");
      checkbox.checked = true;

    }
    else {
      item.classList.add("uncompleted");
      item.classList.remove("completed");
    }

    checkbox.addEventListener("click", (e) => {
      myList.tasks[i].completed = e.target.checked;

      localStorage.setItem("todos", JSON.stringify(myList));

      if (myList.tasks[i].completed) {
        item.classList.add("completed");
        item.classList.remove("uncompleted");
        checkbox.checked = myList.tasks[i].completed;
        myList.tasks[i].done;
        let temp = myList.tasks[i];
        myList.delete(i);
        myList.tasks.push(temp);
        localStorage.setItem("todos", JSON.stringify(myList));
      }
      else {
        item.classList.add("uncompleted");
        item.classList.remove("completed");
        checkbox.checked = myList.tasks[i].completed;
        myList.tasks[i].yet;
        myList.tasks[i].update;
        localStorage.setItem("todos", JSON.stringify(myList));
      }
    });

    const text = document.createElement("p");
    text.innerText = myList.tasks[i].task;

    item.addEventListener("click", () => {
      // make item editable
      text.setAttribute("contenteditable", "true");
      text.focus();

      // update upon Enter key press
      text.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
          myList.tasks[i].task = (text.innerText);
          text.blur();
          localStorage.setItem("todos", JSON.stringify(myList));

        }
      });
    });

    const button = document.createElement("button");
    const trash = document.createElement("i");
    trash.setAttribute("class", `fa fa-trash-o`);
    trash.setAttribute("style", `font-size:32px`);

    button.appendChild(trash);

    button.addEventListener("click", () => {
      myList.delete(i);
      localStorage.setItem("todos", JSON.stringify(myList));
      render();
    });

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(button);
    todo.appendChild(item);
    input.value = null;
  }
}


const render = () => {
  console.log(`render activated`);
  todo.innerHTML = null;


  const todos = localStorage.getItem("todos");
  myUpList = JSON.parse(todos) || [];
  myList.tasks = myUpList.tasks;

  for (let i = 0; i < myList.tasks.length; i++) {
    console.log(myList.tasks.length);

    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    if (myList.tasks[i].completed) {
      item.classList.add("completed");
      item.classList.remove("uncompleted");
      checkbox.checked = true;

    }
    else {
      item.classList.add("uncompleted");
      item.classList.remove("completed");
    }

    checkbox.addEventListener("click", (e) => {
      myList.tasks[i].completed = e.target.checked;

      localStorage.setItem("todos", JSON.stringify(myList));

      if (myList.tasks[i].completed) {
        item.classList.add("completed");
        item.classList.remove("uncompleted");
        checkbox.checked = myList.tasks[i].completed;
        myList.tasks[i].done;
        let temp = myList.tasks[i];
        myList.delete(i);
        myList.tasks.push(temp);
        localStorage.setItem("todos", JSON.stringify(myList));
        render()

      }
      else {
        item.classList.add("uncompleted");
        item.classList.remove("completed");
        checkbox.checked = myList.tasks[i].completed;
        myList.tasks[i].yet;
        let temp = myList.tasks[i];
        myList.delete(i);
        myList.tasks.unshift(temp);
        localStorage.setItem("todos", JSON.stringify(myList));
        render()
      }
    });

    const text = document.createElement("p");
    text.innerText = myList.tasks[i].task;

    item.addEventListener("click", () => {
      // make item editable
      text.setAttribute("contenteditable", "true");
      text.focus();

      // update upon Enter key press
      text.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
          myList.tasks[i].task = (text.innerText);
          text.blur();
          localStorage.setItem("todos", JSON.stringify(myList));

        }
      });


    });

    const button = document.createElement("button");
    const trash = document.createElement("i");
    trash.setAttribute("class", `fa fa-trash-o`);
    trash.setAttribute("style", `font-size:32px`);

    button.appendChild(trash);


    button.addEventListener("click", () => {
      myList.delete(i);
      localStorage.setItem("todos", JSON.stringify(myList));
      render();
    });

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(button);
    todo.appendChild(item);
    input.value = null;
  }
}


const addTodo = (value) => {
  if (value) {
    let newTodo = new Task;
    newTodo.task = value;
    myList.create(newTodo);
    localStorage.setItem("todos", JSON.stringify(myList));
    render();
  }
}


const main = () => {
  makeNewList();
  firstLoadUpdate();
  const form = document.querySelector("#form");
  const input = document.querySelector("#input");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addTodo(input.value);
  });
}

let todos = localStorage.getItem("todos");
console.log(todos);
todos = JSON.parse(todos);
console.log(todos);


const myList = new ToDoList;
if (todos !== null) {
  if (todos.tasks.length > 0) {
    myList.tasks = todos.tasks
  }
}
else {
  todos = myList;
};

todos = JSON.stringify(todos);

main();
