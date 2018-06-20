
var add = document.getElementById('add')
    add.addEventListener('click', function (event) {
    var value = document.querySelector('input').value;
    event.preventDefault();
    if (value) 
        {addItemTodo(value)};
}); 
    


function addItemTodo (text) {
    var item = document.createElement('li');
    var list = document.getElementById('todo');
    item.innerText = text;

    list.appendChild(item);
};

