var books = [
  "Pride and Prejudice",
  "Gone with the Wind",
  "The Great Gatsby",
  "Hamlet",
  "Da Vinci Code",
  "Life of Pi",
  "The Help",
  "Wuthering Heights",
  "The Lord of the Rings",
  "The Handmaid's Tale"
];

//Function for dumping JSON data for each button into the div
function displayBookInfo() {
  let book = $(this).attr("data-name");
  let url =
    "https://api.giphy.com/v1/gifs/search?q=" +
    book +
    "&api_key=N50meNbSPQG2tP5ukDhve3Q1BjLaakTT&limit=10";

  $.get(url)
    .then(function(r) {
      
      var results = r.data;
      for (var i = 0; i < results.length; i++) {
        //to add the gif to the page
        var bookDiv = $("<div class='books'>");
        var imgOriginalStill = results[i].images.original_still.url;
        var imgOriginal = results[i].images.original.url;
        var image = `<img src= ${imgOriginalStill} data-still= ${imgOriginalStill} data-animate=${imgOriginal} data-state=still class=gif>`;
        
        bookDiv.append(image);
        $("#book-view").append(bookDiv);
        var para = $("<p>").text("Rating: " + results[i].rating);
        bookDiv.append(para);               
      }          
    })
    .catch(function(e) {
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
  
// Event handler for user clicking the find-book button
$("#find-book").on("click", function(event) {
  event.preventDefault();
  
  //grab the text from the input box
  let newBook = $("#book-input")
    .val()
    .trim();
  books.push(newBook);
  addButtons();
  
});


//Function for displaying the book info
$(document).on("click", ".book", displayBookInfo);

//function to clear out book-form input after the submit button is clicked
$(document).ready(function () {
  $("#find-book").click(function () {    
    $("#book-form")[0].reset();
  });
});
//Function for getting the gif to change states to animate on click 
$(document).on("click", ".gif", function () {
  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
  var state = $(this).attr("data-state");
  // If the clicked image's state is still, update its src attribute to what its data-animate value is.
  // Then, set the image's data-state to animate
  // Else set src to the data-still value
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});


//Call the addButtons function to display the initial buttons
addButtons();


