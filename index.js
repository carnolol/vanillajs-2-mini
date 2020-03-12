document.querySelector("form").addEventListener("submit", addTodo);



function addTodo(e){
    e.preventDefault();
    const item = document.createElement("li");
    item.innerText = document.addEventListener("click", completeTodo);

    item.innerText = document.getElementById("item").value;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", removeTodo);
    item.append(button);

    const list = document.querySelector("ul");
    list.appendChild(item)
}

function removeTodo(e){
    e.target.parentNode.remove();
}

function completeTodo(e){
   const value = event.target.getAttribute("aria-checked");
    if(value !== "true"){
        event.target.setAttribute("aria-checked","true");
    } else {
        event.target.setAttribute("aria-checked", "flase");
    }
}

// console.log(item)