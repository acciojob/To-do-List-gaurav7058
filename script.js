document.getElementById('addTodoBtn').addEventListener('click', function() {
  const todoInput = document.getElementById('newTodoInput');
  const todoText = todoInput.value.trim(); // Get input value and remove extra spaces

  // Check if the input is not empty
  if (todoText !== "") {
    const todoList = document.getElementById('todoList');
    const newTodoItem = document.createElement('li');
    newTodoItem.textContent = todoText; // Set the text of the new todo item
    todoList.appendChild(newTodoItem);  // Add the new item to the list

    todoInput.value = ""; // Clear the input after adding the todo
  } else {
    alert("Please enter a valid todo item.");
  }
});
