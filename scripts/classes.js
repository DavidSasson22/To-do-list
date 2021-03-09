class ToDoList {
  static counter = 0;
  constructor() {
    this.tasks = [];
  }
  //this method should take a Task as an argument
  create(task) {
    task.id = ToDoList.counter;
    this.tasks.unshift(task);
    ToDoList.counter += 1;
  }
  read() {
    return this.tasks;
  }
  //this method should take an index of this.tasks as an argument;
  delete(index) {
    this.tasks.splice(index, 1);
  }
  print() {
    this.tasks.forEach((el, i) => {
      let status = el.completed ? `completed` : `uncompleted`;
      console.log(`[${i}] id: ${el.id}, task: ${el.task}, status: ${status}`);
    })
  }
}


class Task {
  constructor(task, category = `general`, completed = false) {
    this.task = task;
    this.category = category;
    this.completed = completed;
  }
  //this method should take a string as an argument
  update(updatedTask) {
    this.task = updatedTask;
  }
  //this method should take a boolian as an argument
  done() {
    this.completed = true;
  }
  yet() {
    this.completed = false;
  }
}