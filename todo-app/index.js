const titleInput = document.querySelector("#title-input");
const description = document.querySelector("#description");
const toDoSection = document.querySelector(".todos-section");

// define event callbacks start
function keyHandler(e) {
  if (e.keyCode === 27) {
    clearForm();
  } else if (e.keyCode === 13 && !e.shiftKey) {
    const titleValue = titleInput.value;
    const descValue = description.value;
    addToDo(titleValue, descValue);
    e.preventDefault();
  }
}

function titleClickHandler(e) {
 console.log(this)
 this.parentElement.classList.toggle('todo-item-close')

}
// define event callbacks end

// define functions start //
let idCounter = 0;
function addToDo(title, description) {
  const id = "todo-" + idCounter++;
  const toDoItem = createToDoItem(title, description, id);
  toDoSection.appendChild(toDoItem);
  clearForm();
}

function createToDoItem(title, description, id) {
  const content = ` <div class="todo-title-div">
    <div class="todo-title">
        ${title}
    </div>
        <i delete-target="${id}" class="title-icon fa-solid fa-xmark"></i>
    </div>
    <div class="todo-body">
        <div class="todo-body-content">
        ${description}
        </div>
    </div>`;
  const newTodoItem = document.createElement("div");
  newTodoItem.className = "todo-item todo-item-close";
  newTodoItem.id = id;
  newTodoItem.innerHTML = content;
  newTodoItem.firstElementChild.onclick=titleClickHandler
  return newTodoItem;
}

function clearForm() {
  titleInput.value = "";
  description.value = "";
}
// define functions start end

// event set strat
toDoSection.addEventListener("click", (e) => {
  const isDeleteIcon = e.target.hasAttribute("delete-target");
  if (isDeleteIcon) {
    const toDoId = e.target.getAttribute("delete-target");

    document.querySelector("#" + toDoId).remove();
  }
});

// event set end

// undo function start

titleInput.addEventListener("keydown", keyHandler);
description.addEventListener("keydown", keyHandler);
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 90 && e.ctrlKey) {
    toDoSection.lastElementChild.remove();
  }
});

document.querySelectorAll('.todo-title-div').forEach(function(el){
  console.log(el)
})

// undo function end
