const btn=document.getElementById("btn");
const data=document.getElementById("data");

function api() {
    fetch(" https://jsonplaceholder.typicode.com/todos")
    .then((res)=>res.json())
    .then((res)=>data.innerHTML=JSON.stringify(res))
   .catch((err)=>data.innerHTML=err);
}

btn.addEventListener("click",api);