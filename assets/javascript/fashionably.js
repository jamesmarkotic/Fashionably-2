// displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayMovieInfo() {

//lace dress, red dress
        var movie = $(this).attr("data-name");
        if (movie == "kfash") {
          var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=jackets,dresses&b=burberry&offset=0&limit=12";

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
      }

      if (movie == "jfash") {
        var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=jeans&b=gap&offset=0&limit=12";

        $("#shopstyle").empty();
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          // Creating a div to hold the movie
          console.log(response);

          for (var i = 0; i < response.products.length; i++) {


            var imgURL = response.products[i].image.sizes.Medium.url;
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;
            console.log(brandedName);

            var image = $("<img>").attr({src: imgURL, title: price}).attr("class", "fashimage");
            $("#shopstyle").append(image);

        };

        });
      };
    };





      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".iconbutton", displayMovieInfo);
      // Calling the renderButtons function to display the intial buttons
