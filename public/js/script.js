// Reference HTML elements 
const birdName = document.getElementById("bird-name"),
   birdDescription = document.getElementById("bird-description"),
   birdImage = document.getElementById("bird-img")

// Declare variables that will be filled by bird APIS
let birdCommonName = " ",
   birdScientificName = " ",
   birdFamily = " "

// eBird API key
let apiKey = "96kajpv2hctt"
// eBird API url
let eBirdURL = "https://api.ebird.org/v2/ref/taxonomy/ebird"
// eBird random birl url
let randomBirdURL = "https://ebird.org/species/surprise-me"
// google search API url
let googleSearchURL = "https://customsearch.googleapis.com/customsearch/v1"

// Function that extracts an array of data from eBird API

// Function that extracts link from google API response based off of common name

// Function that implements API data into html elements