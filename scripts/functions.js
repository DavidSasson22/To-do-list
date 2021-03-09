
const render = (list, localStorage) => {
  console.log(`render activated`);
  console.log(list);
  console.log(localStorage);
  todo.innerHTML = null;


  const todos = localStorage.getItem("todos");
  list.tasks = JSON.parse(todos) || [];

  for (let i = 0; i < list.tasks.length; i++) {
    const text = document.createElement("p");
    text.innerText = list.tasks[i].task;

    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    if (list.tasks[i].completed) {
      item.classList.add("completed");
      item.classList.remove("uncompleted");
      checkbox.checked = true;

    }
    else {
      item.classList.add("uncompleted");
      item.classList.remove("completed");
    }

    checkbox.addEventListener("click", (e) => {
      list.tasks[i].completed = e.target.checked;

      localStorage.setItem("todos", JSON.stringify(list.tasks));

      if (list.tasks[i].completed) {
        item.classList.add("completed");
        item.classList.remove("uncompleted");
        checkbox.checked = list.tasks[i].completed;
        list.tasks[i].done;
        let temp = list.tasks[i];
        list.delete(i);
        list.tasks.push(temp);
      }
      else {
        item.classList.add("uncompleted");
        item.classList.remove("completed");
        checkbox.checked = list.tasks[i].completed;
        list.tasks[i].yet;
        list.tasks[i].update;
      }
    });

    // const text = document.createElement("p");
    // text.innerText = list.tasks[i].task;

    item.addEventListener("click", () => {
      // make item editable
      text.setAttribute("contenteditable", "true");
      text.focus();

      // update upon Enter key press
      text.addEventListener("keydown", (event) => {
        if (event.keyCode === 13) {
          list.tasks[i].task = (text.innerText);
          text.blur();
        }
      });


    });


    const button = document.createElement("button");
    const trash = document.createElement("i");
    trash.setAttribute("class", `fa fa-trash-o`);
    trash.setAttribute("style", `font-size:32px`);

    button.appendChild(trash);


    button.addEventListener("click", () => {
      list.delete(i);
      localStorage.setItem("todos", JSON.stringify(list.tasks));
      render(list, localStorage);
    });

    item.appendChild(checkbox);
    item.appendChild(text);
    item.appendChild(button);
    todo.appendChild(item);
    input.value = null;
  }
}


const addTodo = (list, value) => {
  if (value) {
    let newTodo = new Task;
    newTodo.task = value;
    list.create(newTodo);
    localStorage.setItem("todos", JSON.stringify(list.tasks));
    render(list, localStorage);
  }
}


const main = () => {

  makeNewList();

  const form = document.querySelector("#form");
  const input = document.querySelector("#input");

  const myList = new ToDoList;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addTodo(myList, input.value);
  });
}

main();