showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");

  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let myobj = {
    title: addTitle.value,
    text: addTxt.value,
  };

  notesObj.push(myobj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";

  console.log(notesObj);
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";

  notesObj.forEach(function (element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${element.title}</h5>
                  <p class="card-text">${element.text}</p>
                  <button id="${index}" onclick ="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                  <button id="${index}" onclick ="importantNote(this.id)"  class="btn btn-danger">!</button>

                </div>
            </div>
        `;
  });
  let notesElm = document.getElementById("notes");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}

function importantNote(index) {
  console.log("color", index);
  // let notes = localStorage.getItem("notes");
  // let noteCard = document.getElementsByClassName("noteCard");
  // noteCard.style.display ='red'
}

function deleteNote(index) {
  // console.log('Note Deleted', index)

  let notes = localStorage.getItem("notes");

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}


let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  // console.log('Search')
  let inputVal = search.value.toLowerCase();
  let noteCard = document.getElementsByClassName("noteCard");

  Array.from(noteCard).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    // let cardTitle = element.getElementsByTagName("h5")[0].innerText;

    // console.log(cardTitle);

    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    }
    // else if (cardTitle.includes(inputVal)) {
    //   element.style.display = "block";
    // }
    else {
      element.style.display = "none";
    }
  });
});

/*
Further Features:
1. Add Title
2. Mark a note as Important
3. Separate notes by user
4. Sync and host to web server 
*/
