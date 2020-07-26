var list=document.getElementById("list");

function addTodo() {
    var todo_item = document.getElementById("todo-item");
    var li = document.createElement('li');
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    // create edit button
    var edit=document.createElement("button");
    var editText= document.createTextNode("EDIT");
    edit.setAttribute("class","btn btn-outline-warning");

    edit.setAttribute("onclick","editItem(this)")
    edit.appendChild(editText)

    // create dlt button
  
    var dlt=document.createElement("button");
    var dltText= document.createTextNode("DELETE");
    dlt.setAttribute("class","btn btn-outline-warning");
    
    dlt.setAttribute("onclick","deleteItem(this)")
    dlt.appendChild(dltText)

    li.appendChild(dlt)

    li.appendChild(edit)



    list.appendChild(li)
    todo_item.value = ""
    console.log(li);
}
function deleteItem(e){
   e.parentNode.remove()
}

function deleteAll(){
    list.innerHTML=""
}


function editItem(e){
    var edit=prompt("Edit your item",e.parentNode.firstChild.nodeValue)
     e.parentNode.firstChild.nodeValue= edit
}
