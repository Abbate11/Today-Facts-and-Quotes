// the api key 
const quoteToday = document.getElementById("quoteSearch");


const quote = quoteToday.value.trim()
if (quote) {
    favQuotes();
    quoteDay(quote);
    //clear the search bar
    quoteToday.value = ""
}

//make the quote day into a function
const quoteDay = function () {
    console.log()
    //accessing the url of the zenquotes url
    const queryUrl = `https://zenquotes.io/api/today `
    // then we are going to run the function for the response
    fetch(queryUrl)
        // then it response gives us the ok it will show 
        .then(function (response) {
            if (response.ok) {
                console.log(response)
                response.json()
                    .then(function (data) {
                        console.log(data)
                    })
            }
            else {
                alert(`error: ${response.statusText}`)
            }
        })
    quoteDay()

    //quotes
    const getQuotes = async () => {
        var category = 'marriage'
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
}