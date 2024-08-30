/* for (let i = 1; i <= 5; i++){
    let line = "";
    for (let l = 5 ; l >= i; l--){
        line += ' ';
    }
    let k = 1;
    for (let j = 1; j <= i; j++){
        line += ' ' + k;
        k = (k * (i - j)) / j;
    }
    console.log(line);
} */


/* const arr = [1,2,3,4,5];
for (let i = 0; i < arr.length; i++){
    if (i % 2 == 0){
        console.log(arr[i] + ' is odd');
    }
    else {
        console.log(arr[i] + ' is even');
    }
} */

 /* const add = document.getElementById('add');
 const reset = document.getElementById('reset');
 const minus = document.getElementById('minus');
 const h1 = document.getElementById('h1');

 let count = 0;

 add.onclick = function(){
    h1.textContent = count;
    count++;
 }

 reset.onclick = function(){
    h1.textContent = count;
    count = 0;
 }

 minus.onclick = function(){
    h1.textContent = count;
    count--;
 } */

 
    /* let object = {
        name: 'julius',
        age: 14,
        hobby: 'coding',
        objectMethod: function(){
            return this.name + " " + this.age + " " + this.hobby
        }
     }
    
     console.log(object.objectMethod());
     console.log(Object.keys(object));
     console.log(Object.values(object)); */

/* 
let obj = {
    add(a,b){
        return a * b;
    },

    sub(a,b){
        return a - b;
    }
}

console.log(obj.add(32,89));
console.log(obj.sub(32,89)); */

/* 
let x = myFunc(4,3);

function myFunc(a, b){
    return a * b
}

console.log(x);


let date = document.getElementById('btn');
date.onclick="this.innerHTML = Date()";


function displayDate(){
    document.getElementById('btn').innerHTML = Date();
}

 */


/* 
    let profession = "programmer";

    if (profession.toLowerCase() === "programmer"){
        console.log("Let's Connect 🙋");
    }
    else {
        console.log("Okay, Maybe next time !");
    }
 */


/* let string = "hello, Pro, julius, Pro";

let st = string.replace(/Pro/g, "Hey")
console.log(st); */


/* 
        let x = "8";

        x += 9;

        console.log(x);
*/
        // 9
        // 10
        // NaN 




 
/* let form = document.querySelector("form");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let message = document.querySelector(".message-container");

 
function getTodo(value) {
    let todo = document.createElement('div');
    let textEl = document.createElement('span');
    textEl.innerHTML = value;
    // todo.appendChild(textEl);
    message.classList.toggle('success');
    message.textContent = "Item Added";

    setTimeout(() => {
        message.classList.toggle("success")
    }, 2000)

    let closeEl = document.createElement('span');
    closeEl.innerHTML = "&times";
    closeEl.classList.add('delete');

    closeEl.addEventListener('click', () => {
        output.removeChild(todo)
        message.classList.toggle('error')
        message.textContent = "Item Deleted"

        setTimeout(() => {
            message.classList.toggle('error');
        }, 2000)
    });

    // todo.appendChild(closeEl)
    // todo.classList.add('todo')
    return todo;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    let value = input.value;
    if (!value.trim()) return;
    output.appendChild(getTodo(value))
    input.value = "";

});
 */

























/* 

 let form = document.querySelector("form");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let message = document.querySelector(".message-container");

// Load todos from localStorage on page load
window.addEventListener('load', () => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    // todos.forEach(todo => {
        output.appendChild(getTodo(todo));
    });
});

function getTodo(value) {
    let todo = document.createElement("div");
    let textEl = document.createElement("span");
    textEl.innerHTML = value;
    // todo.appendChild(textEl);
    message.classList.toggle("success");
    message.textContent = "Item Added";

    setTimeout(() => {
        message.classList.toggle("success");
    }, 2000);

    let closeEl = document.createElement("span");
    closeEl.innerHTML = "&times;";
    closeEl.classList.add("delete");

    closeEl.addEventListener("click", () => {
        output.removeChild(todo);
        removeTodoFromLocalStorage(value);
        message.classList.toggle("error");
        message.textContent = "Item Deleted";

        setTimeout(() => {
            message.classList.toggle("error");
        }, 2000);
    });

    // todo.appendChild(closeEl);
    // todo.classList.add("todo");
    return todo;
}

// Save todo to localStorage
function saveTodoToLocalStorage(value) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    // todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Remove todo from localStorage
function removeTodoFromLocalStorage(value) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    // todos = todos.filter(todo => todo !== value);
    localStorage.setItem('todos', JSON.stringify(todos));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value;
    if (value.trim() !== "") {
        output.appendChild(getTodo(value));
        saveTodoToLocalStorage(value); // Save todo to localStorage
        input.value = "";
    }
}); */








// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, (err) => {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

let form = document.querySelector("form");
let input = document.querySelector("input");
let output = document.querySelector(".output");
let message = document.querySelector(".message-container");

// Load todos from localStorage on page load
window.addEventListener('load', () => {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => {
        output.appendChild(getTodo(todo));
    });
});

function getTodo(value) {
    let todo = document.createElement("div");
    let textEl = document.createElement("span");
    textEl.innerHTML = value;
    todo.appendChild(textEl);
    message.classList.toggle("success");
    message.textContent = "Item Added";

    setTimeout(() => {
        message.classList.toggle("success");
    }, 2000);

    let closeEl = document.createElement("span");
    closeEl.innerHTML = "&times;";
    closeEl.classList.add("delete");

    closeEl.addEventListener("click", () => {
        output.removeChild(todo);
        removeTodoFromLocalStorage(value);
        message.classList.toggle("error");
        message.textContent = "Item Deleted";

        setTimeout(() => {
            message.classList.toggle("error");
        }, 2000);
    });

    todo.appendChild(closeEl);
    todo.classList.add("todo");
    return todo;
}

// Save todo to localStorage
function saveTodoToLocalStorage(value) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Remove todo from localStorage
function removeTodoFromLocalStorage(value) {
    let todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos = todos.filter(todo => todo !== value);
    localStorage.setItem('todos', JSON.stringify(todos));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value = input.value;
    if (value.trim() !== "") {
        output.appendChild(getTodo(value));
        saveTodoToLocalStorage(value); // Save todo to localStorage
        input.value = "";
    }
});