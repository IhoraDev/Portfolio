"use strict";

// Select the Elements
const CLEAR = document.querySelector(".clear");
const DATE_ELEMENT = document.querySelector("#date");
const LIST_ELEMENT = document.querySelector("#list");
const INPUT = document.querySelector("#input");

// Classes names
const CHECK = "checkTask";
const UNCHECK = "uncheckTask";
const LINE_THROUGH = "lineThrough";

// Variables
let TO_DO_LIST, id;

// get item from localstorage
let data = localStorage.getItem("TODO");

// check if data is not empty
if(data){
    TO_DO_LIST = JSON.parse(data);
    id = TO_DO_LIST.length; // set the id to the last one in the list
    loadList(TO_DO_LIST); // load the list to the user interface
}else{
    // if data isn't empty
    TO_DO_LIST = [];
    id = 0;
}

// load items to the user's interface
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    });
}

// clear the local storage
CLEAR.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
});

// Show todays date
const OPTIONS = {weekday : "long", month:"short", day:"numeric"};
const TODAY = new Date();

DATE_ELEMENT.innerHTML = TODAY.toLocaleDateString("en-US", OPTIONS);

// add to do function
function addToDo(toDo, id, done, trash){
    
    if(trash){ return; }
    
    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";
    
    const item = `<li class="item">
                      <input type="checkbox" class="check ${DONE}" job="complete" id="${id}">
                        <lable class="text ${LINE}"> ${toDo} </lable>
                        <button type="button" class="btn btn-danger" job="delete" id="${id}">X
<!--                    <span class="icon icon-trash"></span>-->
                      </button>
                   </li>
                   `;
    
    const POSITION = "beforeend";
    
    LIST_ELEMENT.insertAdjacentHTML(POSITION, item);
}
const test = document.querySelector("#plus");
console.log(test);

// add an item to the list user the enter key
document.addEventListener("keyup",function(event){
    if(event.keyCode === 13){
        console.log("test");
        const toDo = INPUT.value;
        
        // if the input isn't empty
        if(toDo){
            addToDo(toDo, id, false, false);
            
            TO_DO_LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
            
            // add item to localstorage
            localStorage.setItem("TODO", JSON.stringify(TO_DO_LIST));
            
            id++;
        }
        INPUT.value = "";
    }
});


// complete to do
function completeToDo(element){
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    
    TO_DO_LIST[element.id].done = TO_DO_LIST[element.id].done ? false : true;
}

// remove to do
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    
    TO_DO_LIST[element.id].trash = true;
}

// target the items created dynamically
LIST_ELEMENT.addEventListener("click", function(event){
    const element = event.target; // return the clicked element inside list
    const elementJob = element.attributes.job.value; // complete or delete
    
    if(elementJob === "complete"){
        completeToDo(element);
    }else if(elementJob === "delete"){
        removeToDo(element);
    }
    
    // add item to localstorage
    localStorage.setItem("TODO", JSON.stringify(TO_DO_LIST));
});


















