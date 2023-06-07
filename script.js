const totext=document.getElementById("todotext");
const listcontainer=document.getElementById("list-container");

function addtask(){
    if(totext.value===null || totext.value===""){
        alert("you must write something");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=totext.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="<button>Remove</button>";
        listcontainer.appendChild(span);
        span.addEventListener("click",deletelist);
        function deletelist(){
            listcontainer.removeChild(li);
            listcontainer.removeChild(span);
        }
    }
    totext.value="";
}




        /* var dbtn=document.createElement("button");
        dbtn.appendChild(document.createTextNode("Remove"));
        li.appendChild(dbtn);
        dbtn.addEventListener("click",deletelistitem());
        
    }
    totext.value="";
}
function deletelistitem(){
    li.classList.remove(totext.value);*/


