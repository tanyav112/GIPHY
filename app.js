var books = [
  "Pride and Prejudice", "Odyssey", "The Great Gatsby", "Hamlet", "Da Vinci Code", "Life of Pi", "The Help", "To Kill a Mockingird", "The Lord of the Rings", "The Handmaid's Tale"
];

//Function to capture the book name from the data-attribute
function alertBookName(){
  var bookName = $(this).attr("data-name");
}


// Function for displaying book data
    function addButtons() {
//to prevent repeat buttons
   $("#book-view").empty();
// Looping through the array of books
   for (var i = 0; i < books.length; i++) {
//adding buttons for each book in the array
   var a = $("<button>");
// Adding a class
   a.addClass("book btn btn-primary");
// Adding a data-attribute with a value of the movie at index i
   a.attr("data-name", books[i]);
// Providing the button's text with a value of the movie at index i
   a.text(books[i]);
 // Adding the button to the HTML
  $("#book-view").append(a);
  }
}  

//URL to GIPHY
let url = "http://api.giphy.com/v1/gifs/search?q=" + books + "&api_key=N50meNbSPQG2tP5ukDhve3Q1BjLaakTT&limit=10";

$.get(url)
  .then(function (r) {
    console.log(r)
    // $("#book-view").text(r);

  })
  .catch(function (e) {
    console.log(e)
  })

// This .on("click") function will trigger the AJAX Call
$("#find-book").on("click", function(event) {
  event.preventDefault();

//grab the text from the input box
let newBook = $("#book-input").val().trim();
books.push(newBook);
addButtons();
});

//Function for displaying the book info
$(document).on("click", ".book", alertBookName);

//Call the addButtons function to display the initial buttons
addButtons();



