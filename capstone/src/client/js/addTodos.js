export const addTodo = () => {
  console.log('addToDo called')
}

export const showTodoInput = () => {
  const todoInput = document.createElement('div')
  todoInput.classList.add("two-button");
  const todoInput = document.createElement('input');
  todoInput.type = "text";
  const addButton = document.createElement('button');
  todoInput.appendChild(todoInput);
  todoInput.appendChild(addButton);

  const todo = document.querySelector('#todos');
  todo.appendChild(todoInput);
}