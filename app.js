var books = [
  "Pride and Prejudice", "Gone with the Wind", "The Great Gatsby", "Hamlet", "Da Vinci Code", "Life of Pi", "The Help", "Wuthering Heights", "The Lord of the Rings", "The Handmaid's Tale"
];


//Function for dumping JSON data for each button into the div
function displayBookInfo() {

  let book = $(this).attr("data-name")
  let url = "https://api.giphy.com/v1/gifs/search?q=" + book + "&api_key=N50meNbSPQG2tP5ukDhve3Q1BjLaakTT&limit=10";
  
 
  $.get(url)
    .then(function (r) {
      console.log(r)
      var results = r.data;
      for (var i = 0; i < results.length; i++) {       
      //to add the gif to the page  
      var bookDiv = $("<div class='book'>");
      var imgOriginalUrl = results[i].images.original_still.url; 
      var image = $("<img>").attr("src", imgOriginalUrl);
      bookDiv.append(image);
      $("#book-view").append(bookDiv);
     //to add the rating data with the associated gif
     var para =  $("<p>").text("Rating: " + results[i].rating);
      bookDiv.append(para);
       
    }
    })     
    .catch(function (e) {
      console.log(e)
    });
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
// Adding a data-attribute with a value of the book at index i
   a.attr("data-name", books[i]);
// Providing the button's text with a value of the book at index i
   a.text(books[i]);
 // Adding the button to the HTML
  $("#book-view").append(a);
  }
}  


// This .on("click") function will trigger the AJAX Call
$("#find-book").on("click", function(event) {
  event.preventDefault();

//grab the text from the input box
let newBook = $("#book-input").val().trim();
books.push(newBook);
addButtons();
});

//Function for displaying the book info
$(document).on("click", ".book",  displayBookInfo);

//Call the addButtons function to display the initial buttons
addButtons();



