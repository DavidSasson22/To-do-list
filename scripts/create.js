const makeNewList = () => {
  const absoluteContainer = document.querySelector(".absoluteContainer");

  const container = document.createElement("div");
  container.setAttribute("class", "container");

  const todo = document.createElement("div");
  todo.setAttribute("class", "todo");

  const title = document.createElement("h1");
  title.textContent = "ToDo";

  const subtitle =  document.createElement("p");
  subtitle.textContent = "What do you want to get done?";

  const form =  document.createElement("form");
  form.setAttribute("id", "form");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", "input");
  input.setAttribute("placeholder", "Enter task");

  const listTodo = document.createElement("div");
  listTodo.setAttribute("class", "list-todo");

  const ul = document.createElement("ul");
  ul.setAttribute("id", "todo");

  absoluteContainer.appendChild(container);

  container.appendChild(todo);
  container.appendChild(listTodo);

  todo.appendChild(title);
  todo.appendChild(subtitle);
  todo.appendChild(form);

  listTodo.appendChild(ul);

  form.appendChild(input);
}