import IToDo from "./IToDo";
import ToDo from "./ToDo";

const ToDoListItems = document.getElementById("ToDoListItems")!;
const btnAdd = document.getElementById("btnAdd")! as HTMLButtonElement;
const todoInput = document.getElementById("todoInput")! as HTMLInputElement;

btnAdd.addEventListener("click", function (event) {
  event.preventDefault();

  if (todoInput.value == "") return;

  const todoItem = todo.addTodo({
    id: todo.getList().length + 1,
    title: todoInput.value,
    isCompleted: false,
  });
  addItem(todoItem);

  todoInput.value = "";
});

const todo = new ToDo();

todo.addTodo({ id: 1, title: "title", isCompleted: true });
todo.addTodo({ id: 2, title: "test2", isCompleted: true });
todo.addTodo({ id: 3, title: "title", isCompleted: false });
todo.addTodo({ id: 4, title: "title", isCompleted: true });

todo.removeToDo(1);
console.log(todo.getList());

function addItem(todoItem: IToDo) {
  const elementLI = document.createElement("li");
  elementLI.innerText = todoItem.title;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", (event) => {
    todo.removeToDo(todoItem.id);
    elementLI.remove();
    console.log(todo.getList());
  });

  const chkBox = document.createElement("input");
  chkBox.setAttribute("type", "checkbox");
  chkBox.classList.add("myCheckbox");

  elementLI.prepend(chkBox);
  elementLI.appendChild(deleteButton);

  ToDoListItems.appendChild(elementLI);
}

todo.getList().forEach((todoItem) => {
  addItem(todoItem);
});
