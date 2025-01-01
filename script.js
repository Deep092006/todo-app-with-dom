let task = document.querySelector(".task");
let submit = document.querySelector("button");
let list = document.querySelector("ul");
submit.addEventListener("click",function(e){
    console.log(task.value)
    let li = document.createElement("li");
    li.innerText = task.value;
    list.appendChild(li);
});
