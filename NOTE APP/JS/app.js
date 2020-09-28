console.log("Welcome to Notes App");
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function(e){

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if( notes == null )
    {
        notesObj = []
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);

    showNotes();
}
);


function showNotes() {

    let notes = localStorage.getItem("notes");
    if( notes == null )
    {
        notesObj = []
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function(element, index) {

        html += `
        <div>
            <textarea readonly id="dpta" name="ta" cols="20" rows="5">${element.substring(0,50)}</textarea>
            <button id="${index}" onclick="viewNote(this.id)"> View </button> 
        </div><br>
        `
    });

    let notesElm = document.getElementById('notes');
    if( notesElm.length != 0 )
    {
        notesElm.innerHTML = html;
    }
    
}

function viewNote(index) {
    console.log("View function", index);

    
    let notes = localStorage.getItem("notes");
    if( notes == null )
    {
        notesObj = []
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function(element, index) {

        html += `
        <div>
            <textarea readonly id="dpta" name="ta" cols="20" rows="5">${element.substring(0,50)}</textarea>
            <button id="${index}" onclick="viewNote(this.id)"> View </button> 
        </div><br>
        `
    });

    console.log(notesObj[index]);

    html += `<div>
    <h2>Full Note</h2>
    <textarea readonly name="va" id="VB" cols="30" rows="10">${notesObj[index]}
    </textarea>
    </div>`

    let notesElm = document.getElementById('notes');
    if( notesElm.length != 0 )
    {
        notesElm.innerHTML = html;
    }

}