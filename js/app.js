
let add = document.getElementById('add')
    add.addEventListener('click', function (event) {
    event.preventDefault();
    let input = document.querySelector('input');
    let inputValue = input.value;
    input.value = '';
    if (inputValue) {
        addItemTodo(inputValue)
        
    };
    
    
}); 
    


function addItemTodo (text) {
    let item = document.createElement('li');
    let list = document.getElementById('todo');
    item.innerText = text;

    list.appendChild(item);
};

