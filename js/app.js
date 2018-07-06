
const ul = document.querySelector('ul');
const removeButton = document.getElementsByClassName('remove');
const add = document.getElementById('add')

add.addEventListener('click', function (event) {
    event.preventDefault();
    let input = document.querySelector('input');
    let inputValue = input.value;
    input.value = ''
    if (inputValue) {
        addItemTodo(inputValue)
    };
    
    
}); 

function addItemTodo (text) {
    let list = document.getElementById('todo');
    let item = document.createElement('li');
    let remove = document.createElement('button');
    remove.className = 'remove';
    item.innerText = text;

    list.appendChild(item);
    item.appendChild(remove);
};


