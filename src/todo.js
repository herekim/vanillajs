const todoMessage = document.querySelector(".todoMessage");
const todoInput = document.querySelector(".todoInput");
const todoContainer = document.querySelector(".todoContainer");
const todoContent = document.querySelector(".todoContent");
const todoCheckbox = document.querySelector(".todoCheckbox");

todoMessage.textContent = "What is your main focus for today?";
todoContent.textContent = localStorage.getItem("todoContent");

if (localStorage.getItem("todoContent")) {
  todoContainer.style.display = "flex";
  todoContainer.style.alignItems = "center";
}

todoCheckbox.checked =
  localStorage.getItem("todoChecked") === "true" ? true : false;

todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    localStorage.setItem("todoContent", event.target.value);
    todoContent.textContent = event.target.value;

    todoContainer.style.display = "flex";
    todoContainer.style.alignItems = "center";

    event.target.value = "";
    todoInput.blur();
  }
});

todoCheckbox.addEventListener("click", (event) => {
  if (event.target.checked === true) {
    localStorage.setItem("todoChecked", "true");
    todoContent.style.textDecoration = "line-through";
  } else {
    localStorage.setItem("todoChecked", "false");
    todoContent.style.textDecoration = "none";
  }
});
