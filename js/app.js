const ul = document.querySelector('ul');
const removeButton = document.getElementsByClassName('remove');
const add = document.getElementById('add')
const list = document.getElementById('todo');
const test = document.getElementById('test');




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
    let removeButton = document.createElement('button');
    removeButton.className = 'remove';
    item.className = 'itemClass';
    item.innerText = text;


    //add event listener remove item
    remove.addEventListener('click', removeItem);

    list.appendChild(item);
    console.log(item);
    item.appendChild(removeButton);
};
