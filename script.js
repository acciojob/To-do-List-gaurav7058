let arr=[]
document.getElementById("addTodoBtn").addEventListener("click",handler)


function handler(){
    const inputValue=document.getElementById("newTodoInput").value;
    const box=document.getElementById("todoList");
    const li=document.createElement("li");
    box.append(li)
    arr.push(inputValue)
    li.innerText="";
    arr.map((item)=>{
        li.innerText= `${item}`
        document.getElementById("newTodoInput").value=""
    })
    
}