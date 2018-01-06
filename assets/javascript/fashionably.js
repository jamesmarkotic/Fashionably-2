
      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayMovieInfo() {

//lace dress, red dress
        GetProducts ();

        var movie = $(this).attr("data-name");
        if (movie == "kfash") {
          var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=jackets,dresses&b=burberry&offset=0&limit=20";

        $("#shopstyle").empty();

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          // Creating a div to hold the movie
          console.log(response);

          for (var i = 0; i < response.products.length; i++) {


            var imgURL = response.products[i].image.sizes.Medium.url;

            var image = $("<img>").attr("src", imgURL).attr("class", "fashimage");

            $("#shopstyle").append(image);

        };

        });
      };


      // if (movie == "jfash") {
      //     var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=jeans&b=gap&offset=0&limit=20";
      //
      //   $("#shopstyle").empty();
      //   $.ajax({
      //     url: queryURL,
      //     method: "GET"
      //   }).done(function(response) {
      //     // Creating a div to hold the movie
      //     console.log(response);
      //
      //     for (var i = 0; i < response.products.length; i++) {
      //
      //
      //     var imgURL = response.products[i].image.sizes.Medium.url;
      //
      //     var image = $("<img>").attr("src", imgURL).attr("class", "fashimage");
      //
      //     $("#shopstyle").append(image);
      //
      //   };
      //
      //   });
      // };
    };

    function GetProducts(QryStr)
{

    var Brandarr = new Array();
    var RetailArr = new Array();
    var BrandObj
    {
        var BrandedName = "";
        var color="";
        var imageURL = "";

    }
    console.log("Received Hookup");
    var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=red+dress&b=gucci,calvin-klein&offset=0&limit=10";
        // Creating an AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          // Creating a div to hold the movie
          console.log(response);
          var BrandedName = response.products[0].brandedName;
          var color
           console.log(BrandedName);
           var BrandObj;

       });
    return BrandArr;
}
      // // Function for displaying movie data
      // function renderButtons() {
      //   // Deleting the movies prior to adding new movies
      //   // (this is necessary otherwise you will have repeat buttons)
      //   $("#buttons-view").empty();
      //   // Looping through the array of movies
      //   for (var i = 0; i < movies.length; i++) {
      //     // Then dynamicaly generating buttons for each movie in the array
      //     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
      //     var a = $("<button>");
      //     // Adding a class of movie to our button
      //     a.addClass("movie");
      //     // Adding a data-attribute
      //     a.attr("data-name", movies[i]);
      //     // Providing the initial button text
      //     a.text(movies[i]);
      //     // Adding the button to the buttons-view div
      //     $("#buttons-view").append(a);
      //   }
      // }
      // // This function handles events where a movie button is clicked
      // $("#add-movie").on("click", function(event) {
      //   event.preventDefault();
      //   // This line grabs the input from the textbox
      //   var movie = $("#movie-input").val().trim();
      //   // Adding movie from the textbox to our array
      //   movies.push(movie);
      //   // Calling renderButtons which handles the processing of our movie array
      //   renderButtons();
      // });
      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".iconbutton", displayMovieInfo);
      // Calling the renderButtons function to display the intial buttons
