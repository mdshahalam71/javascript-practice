//  todo class to represent each todo item
class Todo{
    constructor(id,text,completed=false){
        this.id=id;
        this.text=text;
        this.completed=completed;
    }
}

// Main Todo App class

class TodoApp{
    constructor(){
        this.todos=this.loadFromLocalStorage();
        this.currentfilter='all';
        this.editingId=null;
    }
}

//DOM element

this.todoInput=document.getElementById('todoInput');
this.addBtn=document.getElementById('addBtn');
this.todoList=document.getElementById('todoList');
this.todoCount=document.getElementById('todoCount');
this.clearCompletedBtn=document.getElementById('clearCompletedBtn');
this.filterBtns=document.querySelectorAll('.filter-btn');
this.init();