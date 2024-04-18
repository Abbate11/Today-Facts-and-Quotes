
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });


const quoteToday = document.getElementById("quoteSearch");
// create a new Date object
const now = new Date();

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
const getHistoricalFact = async () => {
    var text = 'Marriage'
   const url = 'https://api.api-ninjas.com/v1/historicalevents?text=' + text
   const response = await fetch(url, {
        method: 'GET',
        headers: { 'X-Api-Key': 'rI6t0BiPfOwbkG2hOin0Rg==ygXGu6XjKHRRm1PR' },
        contentType: 'application/json'
   });

   const data = await response.json();
   console.log('Facts:', data);
}
getHistoricalFact();


//quotes
const getQuotes = async () => {
    var category = 'cool'
    const url = 'https://api.api-ninjas.com/v1/quotes?category=' + category;
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'X-Api-Key': 'rI6t0BiPfOwbkG2hOin0Rg==ygXGu6XjKHRRm1PR' },
        contentType: 'application/json'
    });
    // set up the response body
    const data = await response.json();
    console.log('Data:', data);
}

    getQuotes();

