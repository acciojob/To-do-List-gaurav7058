//your code here
let arr=[]
function handler(){
    const inputValue=document.getElementById("newTodoInput").value;
    const box=document.getElementById("todoList");

    arr.push(inputValue)
    box.innerHTML="";
    arr.map((item)=>{
        box.innerHTML+= `<li>${item}</li>`
        document.getElementById("newTodoInput").value=""
    })
}
