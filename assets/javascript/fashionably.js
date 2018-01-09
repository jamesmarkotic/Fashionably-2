
      // displayMovieInfo function re-renders the HTML to display the appropriate content
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "sexy.mp3");
      function displayMovieInfo() {

//lace dress, red dress
        audioElement.play();
        var movie = $(this).attr("data-name");
        if (movie=="happyfash") {
          var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=floral,bright&b=kate-spade,dolce-gabbana,alice-olivia&offset=0&limit=12";
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

            var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "img-responsive img-fluid fashimage");

            $("#shopstyle").append(image);

        };

        });
      };

      if (movie=="coolfash") {
          var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&b=bb-dakota,hugo-boss,bcbg,club-monaco&offset=0&limit=12";
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

            var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");

            $("#shopstyle").append(image);

        };

        });
      };

      if (movie=="unhappyfash") {
          var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=black,rag-bone&b=helmut-lang,gucci&offset=0&limit=12";
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

            var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");

            $("#shopstyle").append(image);

        };

        });
      };

            if (movie=="anxiousfash") {
          var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=grunge,black,ripped&offset=0&limit=12";
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

            var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");

            $("#shopstyle").append(image);

        };

        });
      };

       if (movie=="sillyfash") {
          var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=bright&b=viktor-rolf,vivienne-westwood,alexander-mcqueen&offset=0&limit=12";
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

            var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");

            $("#shopstyle").append(image);

        };

        });
      };

      if (movie=="sexyfash") {
          var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=dresses&b=blumarine,roberto-cavalli,versace&offset=0&limit=12";
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

            var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");

            $("#shopstyle").append(image);

        };

        });
      };

       if (movie=="angelicfash") {
          var queryURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=white-dress,lace&offset=0&limit=12";
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

            var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");

            $("#shopstyle").append(image);

        };

        });
      };


        if (movie=="yourfash") {
          var imageUrl = $("#urlinput").val().trim();

          // Appending the image
          $("#heroImage").html($("<img>").attr("src",imageUrl));
          var APIkey = "b6MXLXj9cETIUjDe4DMVy6SGuDlrtLko"
          var APIsecret = "BP2cM4JvuRe1f5bH-G25OPJIQ5hanehq"

          var queryURL = 'https://api-us.faceplusplus.com/humanbodypp/beta/detect?api_key=b6MXLXj9cETIUjDe4DMVy6SGuDlrtLko&api_secret=BP2cM4JvuRe1f5bH-G25OPJIQ5hanehq&return_attributes=gender,cloth_color&image_url=' + imageUrl;
         // var testURL = 'https://api-us.faceplusplus.com/humanbodypp/beta/detect?api_key=b6MXLXj9cETIUjDe4DMVy6SGuDlrtLko&api_secret=BP2cM4JvuRe1f5bH-G25OPJIQ5hanehq&return_attributes=gender,cloth_color&image_url=https://media.vanityfair.com/photos/5355688206bf36e64100009e/master/w_768,c_limit/scarlett-johansson-vanity-fair-ss04.jpg'
        $.ajax({
          url: queryURL,
          type: "POST"
          // Access-Control-Allow-Origin: *
        }).done(function(response) {
          console.log(response);
          var colorOne = response.humanbodies[0].attributes.lower_body_cloth_color;
          console.log(colorOne);
          var colorTwo = response.humanbodies[0].attributes.upper_body_cloth_color;
          console.log(colorTwo);
          var gender = response.humanbodies[0].attributes.gender.value;
          console.log(gender);

          if (gender=="Female") {
            var searchGender = "womens";
          } else if (gender=="Male") {
            var searchGender = "mens";
          }


          var innerURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=" + colorOne +","+ colorTwo +","+ searchGender + "-clothes&offset=0&limit=12";
          // var innerURL = "http://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=" + colorOne +","+ colorTwo + "&offset=0&limit=12";
          // var innerURL = "http://api.shopstyle.com/api/v2/browse/"+ searchGender + "-clothes?pid=uid3849-40327957-94&fts=" + colorOne +","+ colorTwo + searchGender +"&offset=0&limit=12"
          $.ajax({
            url: innerURL,
            method: "GET"
          }).done(function(response) {
            console.log(response);

          for (var i = 0; i < response.products.length; i++) {


            var imgURL = response.products[i].image.sizes.Medium.url;
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;

            var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");

            $("#shopstyle").append(image);
        };
      });

        // This line grabs the input from the textbox


        });
      };




        if (movie=="kfash") {
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
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;

            var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");

            $("#shopstyle").append(image);

        };

        });
      };


      if (movie=="jfash") {
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

            var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");

            $("#shopstyle").append(image);

        };

        });
      };
    };
      // Function for displaying movie data
      function renderButtons() {
        // Deleting the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#buttons-view").empty();
        // Looping through the array of movies
        for (var i = 0; i < movies.length; i++) {
          // Then dynamicaly generating buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of movie to our button
          a.addClass("movie");
          // Adding a data-attribute
          a.attr("data-name", movies[i]);
          // Providing the initial button text
          a.text(movies[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }
      // This function handles events where a movie button is clicked
      $("#add-movie").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var movie = $("#movie-input").val().trim();
        // Adding movie from the textbox to our array
        movies.push(movie);
        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });
      // Adding a click event listener to all elements with a class of "movie"
      $(document).on("click", ".iconbutton", displayMovieInfo);
      $(document).on("click", ".go-btn", displayMovieInfo);
      $(document).on("click", ".emotionbutton", displayMovieInfo);
      // Calling the renderButtons function to display the intial buttons
