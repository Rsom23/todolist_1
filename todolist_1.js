const todoForm = document.querySelector(".todoForm");   // form 태그
const todoInput = todoForm.querySelector("input");      // form > input 태그
const todoList = document.querySelector(".todoList");   // ul 태그




function init() {

    const li = document.createElement("li");
    const inputValue = todoInput.value;
    const textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);

    if (inputValue === '') {
        alert ('Write to-do list');
    } else {
        todoList.appendChild(li);
    }
    inputValue = "";

    const span = document.createElement("span");
    const text = document.createTextNode("❌");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
        }
    }
}

