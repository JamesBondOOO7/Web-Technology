console.log("TODO APP");

showTasks();

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener('click', function(){

    // the text area
    let txt = document.getElementById("addTxt");

    // Retrieving tasks from the local storage
    let tasks = localStorage.getItem("tasks");
    let tasks_completed = localStorage.getItem("completed");

    if( tasks == null & tasks_completed == null )
    {
        tasksObj = [];
        tasks_completedObj = [];
    }
    else
    {
        tasksObj = JSON.parse(tasks);
        tasks_completedObj = JSON.parse(tasks_completed);
    }


    // If someone clicks on the add Button, then take the value from text area and push it in the local storage
    tasksObj.push(addTxt.value);
    tasks_completedObj.push(0);


    localStorage.setItem("tasks", JSON.stringify(tasksObj));
    localStorage.setItem("completed", JSON.stringify(tasks_completedObj));

    // clearing the text area
    addTxt.value = "";

    showTasks();
});


function showTasks() {

    let tasks = localStorage.getItem("tasks");
    let tasks_completed = localStorage.getItem("completed");

    if( tasks == null & tasks_completed == null )
    {
        tasksObj = [];
        tasks_completedObj = [];
    }
    else
    {
        tasksObj = JSON.parse(tasks);
        tasks_completedObj = JSON.parse(tasks_completed);
    }

    let html = "";

    if( tasksObj.length == 0 )
    {
        tasks_completedObj = [];   
        html += `<h2>Add some Tasks</h2>`;
    }
    else
    {
        tasksObj.forEach(function(element, index){
    
            if ( tasks_completedObj[index] == 0)
            {
                    html += `
                <div class="taskCard my-3 mx-3 card" style="width: 20rem;">
                    <div class="card-body">
                        <h5 class="card-title">TASK ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick="deleteTask(this.id)" class="btn btn-primary">Delete Task</button>
                        <button id="btn${index}" onclick="submitTask(this.id)" class="btn btn-primary" style="margin-left:30px;">Submit</button>
                    </div>
                </div>
            `;
            }
    
            else
            {
                html += `
                <div class="taskCard my-3 mx-3 card" style="width: 20rem; background-color: lightGreen;">
                    <div class="card-body" style=";">
                        <h5 class="card-title">TASK ${index + 1}</h5>
                        <p class="card-text">${element}</p>
                        <button id="${index}" onclick="deleteTask(this.id)" class="btn btn-primary">Delete Task</button>
                        <button id="${"i"+index}" onclick="incomplete(this.id)" class="btn btn-primary inc mx-5" style="margin-left:30px; backgroundColor:"red;" color:"white;" ">X</button>
                    </div>
                </div>
            `;
            }
        });
    }
    

    let taskElem = document.getElementById("tasks");
    taskElem.innerHTML = html;
    
}

function deleteTask(index) {
  
    let tasks = localStorage.getItem("tasks");
    let tasks_completed = localStorage.getItem("completed");

    let taskElem = document.getElementById("tasks");

    if( tasks == null & tasks_completed == null )
    {
        tasksObj = [];
        tasks_completedObj = [];
    }
    else
    {
        tasksObj = JSON.parse(tasks);
        tasks_completedObj = JSON.parse(tasks_completed);
    }

    console.log(tasks_completedObj);
    tasks_completedObj.splice(index,1);
    tasksObj.splice(index, 1);

    localStorage.setItem("tasks", JSON.stringify(tasksObj));
    localStorage.setItem("completed", JSON.stringify(tasks_completedObj));

    showTasks();
};

function submitTask(index) {

    let idx = Number(String(index).substring(3,));
    let tasks = localStorage.getItem("tasks");
    let tasks_completed = localStorage.getItem("completed");

    let taskElem = document.getElementById("tasks");

    if( tasks == null & tasks_completed == null )
    {
        tasksObj = [];
        tasks_completedObj = [];
    }
    else
    {
        tasksObj = JSON.parse(tasks);
        tasks_completedObj = JSON.parse(tasks_completed);
    }

    tasks_completedObj[idx] = 1;

    localStorage.setItem("completed", JSON.stringify(tasks_completedObj));
    
    showTasks();

};

function incomplete(index) {
  
    let idx = Number(String(index).substring(1,));
    console.log(index, idx);
    let tasks = localStorage.getItem("tasks");
    let tasks_completed = localStorage.getItem("completed");

    let taskElem = document.getElementById("tasks");

    if(tasks == null & tasks_completed == null )
    {
        tasksObj = [];
        tasks_completedObj = [];
    }
    else
    {
        tasksObj = JSON.parse(tasks);
        tasks_completedObj = JSON.parse(tasks_completed);
    }

    tasks_completedObj[idx] = 0;
    localStorage.setItem("completed", JSON.stringify(tasks_completedObj));

    showTasks();
};