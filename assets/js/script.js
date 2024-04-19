const quoteToday = document.getElementById("quoteSearch");
const deleteBtn = document.querySelector(".btn");
// create a new Date object
const now = new Date();
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
// Get the current data and time
function updateTime() {
    const now = new Date()
    const currentDate = now.toLocaleDateString();//get current date
    const currentTime = now.toLocaleTimeString();// get current time
    document.querySelector('.js-time').textContent = currentTime; // concatenate date and time 
    document.querySelector('.js-date').textContent = currentDate;
}
//calls the uptime function every second
setInterval(updateTime, 1000);

// search historical facts
const getHistoricalFact = async (keyword) => {
    // var text = 'Marriage'
    const url = 'https://api.api-ninjas.com/v1/historicalevents?text=' + keyword;
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'X-Api-Key': 'rI6t0BiPfOwbkG2hOin0Rg==ygXGu6XjKHRRm1PR' },
        contentType: 'application/json'
    });

    const data = await response.json();
    console.log('Facts:', data);
    document.getElementById("selected-option").innerHTML = `
        <div class="row">
        <div class="col s12 m6">
            <div class="card transparent darken-1">
                <div class="card-content white-text">
                    <span class="card-title">${data[0].day}/${data[0].month}/${data[0].year}</span>
                    <p><b>Fact: </b> ${data[0].event}</p>
                    <hr>
                    <p id='quote-content'></p>
                </div>
                <div class="card-action">
                <a href="#" id="favorite">Favorite</a>
              </div>
            </div>
        </div>
        </div>`;

    getQuotes(keyword);
    // TODO Append these values to this div with <p> <title> <cards></cards></title></p>
}
// getHistoricalFact();

document.addEventListener("click", function (event) {
    if (event.target.matches("#favorite")) {
        console.log("favoriting", (document.getElementById("quote-content").textContent));
        addToFavorites(document.getElementById("quote-content").textContent);
    }
})

//quotes
const getQuotes = async (keyword) => {
    // var category = 'cool'
    const url = 'https://api.api-ninjas.com/v1/quotes?category=' + keyword;
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'X-Api-Key': 'rI6t0BiPfOwbkG2hOin0Rg==ygXGu6XjKHRRm1PR' },
        contentType: 'application/json'
    });
    // set up the response body
    const data = await response.json();
    // console.log('Quotes:', data);
    const p = document.createElement("p");
    p.innerHTML = `
    <b>Quote: </b>${data[0].quote}`;
    document.getElementById('quote-content').appendChild(p);
    // TODO Append these values to this div with <p> <title> <cards></cards></title></p>
}

// getQuotes();

$(document).ready(function () {
    $('.dropdown-trigger').dropdown();
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);

    // Event listener for dropdown options
    document.querySelectorAll('#dropdown1 a').forEach(function (element) {
        element.onclick = function () {
            // Get the value from data-value attribute of the clicked option
            var value = this.getAttribute('data-value');
            // console.log(value)
            //pass this to the fetch
            // call the getQuotes(value);
            // getQuotes(value);
            // call the getFacts(value);
            getHistoricalFact(value);
            // Append the selected option to the div
            // document.getElementById('selected-option').innerText = value;

            // Prevent the default action of anchor tag
            return false;
        };
    });
});

//Function to add an item to favorites 
function addToFavorites(item) {
    //Retrieve existing favorites from local storage 
    //Add each item to favorites if it's not already there
    if (!favorites.includes(item)) {
        favorites.push(item);
    }
    //save the updated favorites back to local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

//function to remove an item favorites
function removeFromFavorites() {
    
}

deleteBtn.addEventListener('click', removeFromFavorites);

//function to display favorites 
function displayFavorites() {
    // Retrieve favorites form local storage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log("favorites", favorites)
    //Display favorites in the UI 
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = ''; //clear previous favorites

    favorites.forEach(item => { 
        const favCard = document.createElement('div')
        favCard.className = "card";
        const listItem = document.createElement('li')
        listItem.textContent = item;
        const deleteButn = document.createElement('button')
        deleteButn.className = "btn";
        deleteButn.textContent = "delete";
        listItem.appendChild(deleteButn);
        favCard.appendChild(listItem);
        favoritesList.appendChild(favCard);
    });
}

displayFavorites()
// const selectedItems = ['Item 1', 'Item 2', 'Item 3'];
// addToFavorites(selectedItems);