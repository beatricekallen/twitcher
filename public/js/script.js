// Reference HTML elements 
const birdName = document.getElementById("bird-name"),
   birdDescription = document.getElementById("bird-description"),
   birdImage = document.getElementById("bird-img")

// Declare variables that will be filled by bird APIS
let birdCommonName = " ",
   birdScientificName = " ",
   birdFamily = " "

// eBird API key
const eBirdKey = "96kajpv2hctt"
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
           console.log(data[birdIndex]);
           birdCommonName = data[birdIndex].comName
           birdScientificName = data[birdIndex].sciName
           birdFamily = data[birdIndex].familyComName