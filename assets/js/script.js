/** @format */

// search historical facts
const getHistoricalFact = async () => {
	var text = "WWII";
	const url = "https://api.api-ninjas.com/v1/historicalevents?text=" + text;
	const response = await fetch(url, {
		method: "GET",
		headers: { "X-Api-Key": "rI6t0BiPfOwbkG2hOin0Rg==ygXGu6XjKHRRm1PR" },
		contentType: "application/json",
	});

	const data = await response.json();
	console.log("Facts:", data);
};
getHistoricalFact();

//get Quotes
const getQuotes = async () => {
	var category = "marriage";
	const url = "https://api.api-ninjas.com/v1/quotes?category=" + category;
	const response = await fetch(url, {
		method: "GET",
		headers: { "X-Api-Key": "rI6t0BiPfOwbkG2hOin0Rg==ygXGu6XjKHRRm1PR" },
		contentType: "application/json",
	});
	// set up the response body
	const data = await response.json();
	console.log("Quotes:", data);
};

getQuotes();
