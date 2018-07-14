
// variables
const ul = document.querySelector('ul');
const removeButton = document.getElementsByClassName('remove');
const add = document.getElementById('add');
const completeButton = document.getElementsByClassName('complete');


add.addEventListener('click', function (event) {
    event.preventDefault();
    let input = document.querySelector('input');
    let inputValue = input.value;
    input.value = ''
    if (inputValue) {
        addItemTodo(inputValue)
    };
});

// remove item from list
function removeItem(e) {
    let item = this.parentNode;
    let parent = item.parentNode;

    parent.removeChild(item);
};

// add item to list
function addItemTodo(text) {
    let list = document.getElementById('todo');
    let item = document.createElement('li');
    let remove = document.createElement('button');
    let complete = document.createElement('button')
    remove.className = 'remove';
    complete.className = 'complete';
    item.innerText = text;

    // add event listener remove item
    remove.addEventListener('click', removeItem);

    // add elements to the DOM
    list.appendChild(item);
    item.appendChild(remove);
    item.appendChild(complete);
};