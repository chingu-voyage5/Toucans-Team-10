"use strict";
var data = {
    todo: [],
    completed: []
};


// variables
/*const ul = document.querySelector('ul');*/
const removeButton = document.getElementsByClassName('remove');
const add = document.getElementById('add');
const completeButton = document.getElementsByClassName('complete');

// event listeners
add.addEventListener('click', function (event) {
    event.preventDefault();
    let input = document.querySelector('input');
    let inputValue = input.value;
    
    if (inputValue) {
        data.todo.push(inputValue); //store value in array
        console.log(data);
        addItemTodo(inputValue);
        input.value = ''; // empty input field after adding task
        
        dataUpdate(); //update data object to local storage
    };
});

// add items to local storage
function dataUpdate() {
    /* https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage */
    
};


// remove item from list
function removeItem(e) {
    let item = this.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;

    /* similar functionality to moving between the arrays in completeItem function
    will need else statement to remove from completed if id ==='complete' */
    
    if (id === 'todo') {
    data.todo.splice(data.todo.indexOf(value), 1);
    }
    /* else {
    data.completed.splice(data.completed.indexOf(value), 1);
    } */
    
    dataUpdate(); //update data object to local storage
    console.log(data);
    
    parent.removeChild(item);
};

function completeItem() {
    let item = this.parentNode;
    let parent = item.parentNode;
    let id = parent.id;
    let value = item.innerText;

    let target;
// check if the item should be added to the completed list or re-added to the todo ist
    if (id === 'todo') {
        target = document.getElementById('completed');
    } else {
        target = document.getElementById('todo');
    }

    parent.removeChild(item);
    
    // place completed item above previously completed items
    target.insertBefore(item, target.childNodes[0]);
};


// add item to list
function addItemTodo(text) {
    let list = document.getElementById('todo');
    let item = document.createElement('li');
    let remove = document.createElement('button');
    let complete = document.createElement('button')
    remove.className = 'remove';
    complete.className = 'complete';

    // add completed items to completed list
    complete.classList.add('complete');
    complete.innerText = completeButton;
    item.innerText = text;

    // add event listener remove item
    remove.addEventListener('click', removeItem);

    // add event listener complete item
    complete.addEventListener('click', completeItem);

    // add elements to the DOM
    list.appendChild(item);
    item.appendChild(remove);
    item.appendChild(complete);





/*
 data.todo.splice and data.completed.push added to "completeItem" function to move task item from todo[] to completed[] 

 include statement to update data object
dataUpdate(); //update data object to local storage
*/


};