var books = [
  "Pride and Prejudice", "Odyssey", "The Great Gatsby", "Hamlet", "Da Vinci Code", "Life of Pi", "The Help", "To Kill a Mockingird", "The Lord of the Rings", "The Handmaid's Tale"

];

//grab the text from the input box
let book = $("#book-input").val();

//URL to GIPHY
let url ="http://api.giphy.com/v1/gifs/search?q=" + books + "&api_key=N50meNbSPQG2tP5ukDhve3Q1BjLaakTT&limit=10";

$.get(url)
.then(function (r) {
  console.log (r)

})
