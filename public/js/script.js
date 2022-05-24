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
const getBirdData = function () {
   let eBirdURL = "https://api.ebird.org/v2/ref/taxonomy/ebird?fmt=json&cat=species"

   fetch(eBirdURL)
     .then( response => response.json())
     .then( data => {
       //console.log(data)
       var randomNum = Math.floor(Math.random() * 1000);
       var selectedBird = data[randomNum]
       //console.log(selectedBird)
       birdName.textContent = selectedBird.comName
       birdDescription.textContent = selectedBird.familyComName + ", " + selectedBird.sciName
       return selectedBird
     }).then(res => {
      console.log(res)
      fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyAjCiOUt3sF9XYeGSGK9N1DKYZPGj-is7c&cx=c5dfc36930162300f&q=${res.comName}`)
        .then(data => data.json())
        .then(gresponse => {
          console.log(gresponse)
          birdImage.setAttribute("src", gresponse.items[0].pagemap.cse_image[0].src)
          // const src = response.items[0].pagemap.cse_image[0].src;
          // const img = `<img src=${src} />`
          // contentDivEl.innerHTML = img;
        })
     })
    }     
      
    //   function (response) {
    //    if (response.ok) {
    //      response.json().then(function (data) {
    //        let birdIndex = Math.floor(Math.random() * data.length);
    //        console.log(data[birdIndex]);
    //        birdCommonName = data[birdIndex].comName
    //        birdScientificName = data[birdIndex].sciName
    //        birdFamily = data[birdIndex].familyComName
    //      }
    //  )}
      



    getBirdData()