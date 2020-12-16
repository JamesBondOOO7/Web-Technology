console.log("JS script for Notes app");

// If users adds a note, then save it in the local storage

showNotes();

// Add Notes Button
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function(e){

    // Text area
    let addTxt = document.getElementById("addTxt");

    let notes = localStorage.getItem("notes");

    if( notes == null )
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    // If someone clicks on the add Button, then take the value from text area and push it in the local storage
    notesObj.push(addTxt.value);

    localStorage.setItem("notes", JSON.stringify(notesObj));

    // clearing the text area
    addTxt.value = "";

    console.log(notesObj);

    // To display all notes
    showNotes();
});

function showNotes() {

    // Notes from local storage
    let notes = localStorage.getItem("notes");

    // Selecting the element with id = notes
    let notesElem = document.getElementById('notes');


    if( notes == null )
    {
        notesElem.innerHTML = `<h2> No notes to show !! Add some Notes !!</h2>`;
        return;
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function(element, index){

    html += `
        <div class="noteCard my-2 mx-2 card" style="width: 20rem;">
            <div class="card-body">
                <h5 class="card-title">Note ${index + 1}</h5>
                <p class="card-text">${element.substring(0,77)}</p>
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                <button id="${index}" onclick="viewNote(this.id)" class="btn btn-primary" style="margin-left:30px;">View</button>
            </div>
        </div>
    `;
    notesElem.innerHTML = html;

    });

}

// Delete Node Function
function deleteNote(index) {

    /* 
    - Button's id = it's index
    - If the user clicks on the delete button; then we will pass it's unique id
    - Then we will delete that note from the local storage
    */
    console.log("Node deleted", Number(index) + 1);
    
    let notes = localStorage.getItem("notes");

    if( notes == null )
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);

    // Updating the local Storage
    localStorage.setItem("notes", JSON.stringify(notesObj));

    showNotes();
}

// View Function with Full Screen Overlay
function viewNote(index) {
    
    let notes = localStorage.getItem("notes");

    if( notes == null )
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    console.log(notesObj[index]);
    let html = `
    <!-- Button to close the overlay navigation -->
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

    <!-- Overlay content -->
    <div class="overlay-content">
        <a href="#">${notesObj[index]}</a>
    </div>
    </div>`;

    let container = document.getElementsByClassName("container")[0];
    
    let div = document.createElement('div');
    div.id = "myNav";
    div.className = "overlay";
    div.innerHTML = html;
    console.log(div);
    container.appendChild(div);
    openNav();
};

function closeNav() {
    document.getElementById("myNav").style.display = "none";
    let div = document.getElementById("myNav");
    let parent = div.parentElement
    parent.removeChild(div);
};

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){

    // Retreiving text from search bar
    let inputVal = search.value.toLowerCase();
    console.log("Input Event", inputVal);

    // Extracting all the notes
    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function(element){

        // Each note has some text in " p " tag
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();

        if( cardTxt.includes(inputVal) )
        {
            element.style.display = "block";
        }
        else
        {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
});