// Reference HTML elements 
const birdName = document.getElementById("bird-name"),
   birdDescription = document.getElementById("bird-description"),
   birdImage = document.getElementById("bird-img")

// Declare variables that will be filled by bird APIS
let birdCommonName = " ",
   birdScientificName = " ",
   birdFamily = " "

// eBird API key
const apiKey = "96kajpv2hctt"
// eBird API url
const eBirdURL = "https://api.ebird.org/v2/ref/taxonomy/ebird"
// eBird random birl url
const randomBirdURL = "https://ebird.org/species/surprise-me"
// google API key
const googleKey = "AIzaSyAjCiOUt3sF9XYeGSGK9N1DKYZPGj-is7c"
// google search API url
const googleSearchURL = "https://customsearch.googleapis.com/customsearch/v1"

// Function that extracts an array of data from eBird API
let getBirdData = function () {
   let eBirdURL = "https://api.ebird.org/v2/ref/taxonomy/ebird?fmt=json&cat=species"

   fetch(eBirdURL)
     .then(function (response) {
       if (response.ok) {
         response.json().then(function (data) {
           let birdIndex = Math.floor(Math.random() * data.length);
            birdCommonName = data[birdIndex].comName
           birdScientificName = data[birdIndex].sciName
           birdFamily = data[birdIndex].familyComName

           birdName.textContent = birdCommonName
           birdDescription.textContent = birdScientificName + ", " + birdFamily

           
      
           console.log(birdCommonName, birdScientificName, birdFamily);
         });
       } else {
         modalWindowEl.setAttribute("class", "is-active");
         modalWindowContentEl.textContent = "Error: City not found.";
       }
     })
     .catch(function (error) {
       modalWindowEl.setAttribute("class", "is-active");
       modalWindowContentEl.textContent = "Unable to connect to server.";
   });
};
 
let displayEvents = function (data) {
   eventsContainerEl.textContent = "";
 
   for (var i = 0; i < data._embedded.events.length; i++) {
   console.log("working");
}
}
getBirdData();

// Function that extracts link from google API response based off of common name

// Function that implements API data into html elements