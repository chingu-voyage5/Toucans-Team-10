//Remove and Complete Image or checkbox


//User clicked on the submit button
//If there is any text in the newtask field add text it to the todolist
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('newTask').value;
    if (value) addItemTodo(value);

});


//Adds a new ite to the todo list
function addItemTodo(text) {
    var list = document.getElementById('todo')

    var item = document.createElement('li');
    item.innerText = text;

    var buttons = document.createElement('div');
    buttons.classList.add('button');

    var remove = document.createElement('button');
    remove.classList.add('remove');

    var complete = document.createElement('button');


    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild('buttons');

}

