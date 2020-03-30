// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
let rng = Math.floor(Math.random()*100)   
console.log(rng) 
let search = $('#search-term').val();  
    fetch('https://api.giphy.com/v1/gifs/search?q=' + search + '&rating=pg&api_key=dc6zaTOxFJmzC')
  .then(function(response){
      return response.json();
  })
  .then(function(data) {
    console.log(data.data[0].images.original.url);
    $('#img').html('<img src=' + data.data[rng].images.original.url + '>')
  }) 
  
  
});

