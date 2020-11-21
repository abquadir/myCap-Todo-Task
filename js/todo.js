showTodo()
let btn = document.querySelector('button')
btn.addEventListener('click',(e)=>{
    e.preventDefault()
    let userinput = document.getElementById('input')
    if (userinput.value===''){
        alert("Please Enter a Todo Item to get added")
    }
    else{
        let todo = localStorage.getItem('todo')
        if(todo===null){
            todoObj=[]
        }
        else{
            todoObj=JSON.parse(todo)
        }
        todoObj.push(userinput.value)
        localStorage.setItem('todo',JSON.stringify(todoObj))
        userinput.value=""
        // console.log(todoObj);
        showTodo()
    }
})

function showTodo(){
    let todo = localStorage.getItem('todo')
    if(todo===null){
        todoObj=[]
    }
    else{
        todoObj=JSON.parse(todo)
    }
    let html=""
    todoObj.forEach((element,index)=>{
        html+=`<div class="alert alert-primary" id="list" role="alert">
      ${element}
        <span><i id="${index}" onclick='deleteTodo(this.id)' class="fa fa-trash-o float-right"  aria-hidden="true"></i></span>
       </div>`
    })
    let todosElement = document.getElementById('todos')
    if(todoObj.length!=0){
        todosElement.innerHTML=html
    }
    else{
        todosElement.innerHTML=`<h4>Currently no Todo to perform</h4>`
    }
}

function deleteTodo(index){
    //  console.log("deleting",index);
    let todo = localStorage.getItem("todo");
    if(todo==null){
        todoObj=[]
    }
    else{
        todoObj=JSON.parse(todo)
    }
    todoObj.splice(index,1);
    localStorage.setItem("todo",JSON.stringify(todoObj))
    showTodo()
    }