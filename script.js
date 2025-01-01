let task = document.querySelector(".task");
let submit = document.querySelector("button");
let list = document.querySelector("ul");
let delclass = document.querySelectorAll(".delbtn")

submit.addEventListener("click",function(e){
    console.log(task.value)
    let li = document.createElement("li");
    li.innerText = task.value;
    list.appendChild(li);
    let delbtn = document.createElement("button");
    delbtn.classList.add("delbtn");
    delbtn.innerText = "delete";
    li.appendChild(delbtn);
});
list.addEventListener("click",function(e){
    if(e.target.nodeName == "BUTTON"){
        let par = e.target.parentElement;
        par.remove();
    }

})
