export const addTodo = () => {
  const addTodoInput = document.querySelector("#addTodoInput");
  const addTodoButton = document.querySelector("#addTodoButton");

  const userTodoInput = addTodoInput.value;

  const li = document.createElement('li');
  li.innerText = userTodoInput;

  const ul = document.querySelector('#todosList');
  ul.appendChild(li);
  addTodoInput.value = "";

}

export const showTodoInput = () => {
  const todoInputContainer = document.createElement('div')
  todoInputContainer.classList.add("two-button");
  todoInputContainer.style.width = "40rem"
  const todoInput = document.createElement('input');
  todoInput.type = "text";
  todoInput.placeholder = "Enter the todo"
  todoInput.id = 'addTodoInput'
  const addButton = document.createElement('button');
  addButton.innerText = "Add to list"
  addButton.id = "addTodoButton"
  addButton.type = "submit"

  todoInputContainer.appendChild(todoInput);
  todoInputContainer.appendChild(addButton);

  const todo = document.querySelector('#todos');
  todo.appendChild(todoInputContainer);

  // creating an unordered list element where all the todos would be added
  const ul = document.createElement('ul');
  ul.id = 'todosList';
  todo.appendChild(ul)
}