

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



function addItemTodo (text) {

    let item = document.createElement('li');
    let removeButton = document.createElement('button');
    removeButton.className = 'remove';
    item.className = 'itemClass';
    item.innerText = text;

    list.appendChild(item);
    console.log(item);
    item.appendChild(removeButton);
};









