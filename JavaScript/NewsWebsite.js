// Initialize the news api parameters
let source = "in";
let apiKey = "8d3d8b7c0ecc4aceaa1b483bf1027031";
let key = `https://newsapi.org/v2/top-headlines?country=${source}&apiKey=${apiKey}`;
// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open("GET", key, true);

// What to do when response is ready
xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index)
      let news = `<div class="card noteCard">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                    <p class="card-text" hidden>${element["title"]}</p>
                                   <b>Breaking News ${index + 1}:</b> ${element["title"]}
                                </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
                                <div class="card-body"> ${element["content"]}. <a href="${element["url"]}" target="_blank" >Read more here</a></div>
                            </div>
                        </div>`;
      newsHtml += news;
    });
    newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("Some error occured");
  }
};

xhr.send();




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