
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "sexy.mp3");

    var config = {
        apiKey: "AIzaSyAF5EQQcMjKOS8sjk59vsEn3grMYTFLG8A",
        authDomain: "fashionably-f68d1.firebaseapp.com",
        databaseURL: "httpss://fashionably-f68d1.firebaseio.com",
        projectId: "fashionably-f68d1",
        storageBucket: "fashionably-f68d1.appspot.com",
        messagingSenderId: "214704986736"
      };
    firebase.initializeApp(config);
    var database = firebase.database();


    function displayMovieInfo() {

        audioElement.play();
        var movie = $(this).attr("data-name");
        if (movie=="happyfash") {
          var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=floral,bright&b=kate-spade,dolce-gabbana,alice-olivia&offset=0&limit=12";
          $("#shopstyle").empty();
          database.ref().remove();
          $.ajax({
          url: queryURL,
          method: "GET"
          }).done(function(response) {

          console.log(response);

          for (var i = 0; i < response.products.length; i++) {

            event.preventDefault();



            var imgURL = response.products[i].image.sizes.Medium.url;
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;
            var itemOrigin = response.products[i].clickUrl;

            // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
            // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
            //
            //
            //
            // $(itemLink).append(image);
            // console.log(itemLink);
            // $("#shopstyle").append(itemLink);

            var savedImage = {
              imgSource: imgURL,
              iPrice: price,
              bName: brandedName,
              iOrigin: itemOrigin
            };
            database.ref().push(savedImage);

            };

          });
        };

        if (movie=="coolfash") {
          var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&b=bb-dakota,hugo-boss,bcbg,club-monaco&offset=0&limit=12";
          $("#shopstyle").empty();
          database.ref().remove();
          $.ajax({
          url: queryURL,
          method: "GET"
          }).done(function(response) {

            console.log(response);

            for (var i = 0; i < response.products.length; i++) {


              event.preventDefault();



              var imgURL = response.products[i].image.sizes.Medium.url;
              var price = response.products[i].price;
              var brandedName = response.products[i].brandedName;
              var itemOrigin = response.products[i].clickUrl;

              // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
              // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
              //
              //
              //
              // $(itemLink).append(image);
              // console.log(itemLink);
              // $("#shopstyle").append(itemLink);

              var savedImage = {
                imgSource: imgURL,
                iPrice: price,
                bName: brandedName,
                iOrigin: itemOrigin
              };
              database.ref().push(savedImage);

              };

            });
          };

        if (movie=="unhappyfash") {
          var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=black,rag-bone&b=helmut-lang,gucci&offset=0&limit=12";
          $("#shopstyle").empty();
          database.ref().remove();
          $.ajax({
          url: queryURL,
          method: "GET"
          }).done(function(response) {

            console.log(response);

            for (var i = 0; i < response.products.length; i++) {


              event.preventDefault();



              var imgURL = response.products[i].image.sizes.Medium.url;
              var price = response.products[i].price;
              var brandedName = response.products[i].brandedName;
              var itemOrigin = response.products[i].clickUrl;

              // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
              // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
              //
              //
              //
              // $(itemLink).append(image);
              // console.log(itemLink);
              // $("#shopstyle").append(itemLink);

              var savedImage = {
                imgSource: imgURL,
                iPrice: price,
                bName: brandedName,
                iOrigin: itemOrigin
              };
              database.ref().push(savedImage);

              };

            });
          };

        if (movie=="anxiousfash") {
          var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=grunge,black,ripped&offset=0&limit=12";
          $("#shopstyle").empty();
          database.ref().remove();
          $.ajax({
          url: queryURL,
          method: "GET"
          }).done(function(response) {

          console.log(response);

          for (var i = 0; i < response.products.length; i++) {


            event.preventDefault();



            var imgURL = response.products[i].image.sizes.Medium.url;
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;
            var itemOrigin = response.products[i].clickUrl;

            // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
            // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
            //
            //
            //
            // $(itemLink).append(image);
            // console.log(itemLink);
            // $("#shopstyle").append(itemLink);

            var savedImage = {
              imgSource: imgURL,
              iPrice: price,
              bName: brandedName,
              iOrigin: itemOrigin
            };
            database.ref().push(savedImage);

            };

          });
        };

       if (movie=="sillyfash") {
        var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=bright&b=viktor-rolf,vivienne-westwood,alexander-mcqueen&offset=0&limit=12";
        $("#shopstyle").empty();
        database.ref().remove();
        $.ajax({
        url: queryURL,
        method: "GET"
        }).done(function(response) {

          console.log(response);

          for (var i = 0; i < response.products.length; i++) {


            event.preventDefault();



            var imgURL = response.products[i].image.sizes.Medium.url;
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;
            var itemOrigin = response.products[i].clickUrl;

            // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
            // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
            //
            //
            //
            // $(itemLink).append(image);
            // console.log(itemLink);
            // $("#shopstyle").append(itemLink);

            var savedImage = {
              imgSource: imgURL,
              iPrice: price,
              bName: brandedName,
              iOrigin: itemOrigin
            };
            database.ref().push(savedImage);

          };

        });
      };

      if (movie=="sexyfash") {
        var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=dresses&b=blumarine,roberto-cavalli,versace&offset=0&limit=12";
        $("#shopstyle").empty();
        database.ref().remove();
        $.ajax({
        url: queryURL,
        method: "GET"
        }).done(function(response) {

          console.log(response);

          for (var i = 0; i < response.products.length; i++) {


            event.preventDefault();



            var imgURL = response.products[i].image.sizes.Medium.url;
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;
            var itemOrigin = response.products[i].clickUrl;

            // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
            // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
            //
            //
            //
            // $(itemLink).append(image);
            // console.log(itemLink);
            // $("#shopstyle").append(itemLink);

            var savedImage = {
              imgSource: imgURL,
              iPrice: price,
              bName: brandedName,
              iOrigin: itemOrigin
            };
            database.ref().push(savedImage);

          };

        });
      };

       if (movie=="angelicfash") {
          var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=white-dress,lace&offset=0&limit=12";
          $("#shopstyle").empty();
          database.ref().remove();
          $.ajax({
          url: queryURL,
          method: "GET"
          }).done(function(response) {

          console.log(response);

          for (var i = 0; i < response.products.length; i++) {


            event.preventDefault();



            var imgURL = response.products[i].image.sizes.Medium.url;
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;
            var itemOrigin = response.products[i].clickUrl;

            // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
            // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
            //
            //
            //
            // $(itemLink).append(image);
            // console.log(itemLink);
            // $("#shopstyle").append(itemLink);

            var savedImage = {
              imgSource: imgURL,
              iPrice: price,
              bName: brandedName,
              iOrigin: itemOrigin
            };
            database.ref().push(savedImage);

          };

        });
      };


        if (movie=="yourfash") {
          var imageUrl = $("#urlinput").val().trim();
          $("#shopstyle").empty();
          database.ref().remove();
          // Appending the image
          $("#heroImage").html($("<img>").attr({src:imageUrl, class: "fashimageTwo img-responsive"}));
          var APIkey = "b6MXLXj9cETIUjDe4DMVy6SGuDlrtLko"
          var APIsecret = "BP2cM4JvuRe1f5bH-G25OPJIQ5hanehq"

          var queryURL = 'httpss://api-us.faceplusplus.com/humanbodypp/beta/detect?api_key=b6MXLXj9cETIUjDe4DMVy6SGuDlrtLko&api_secret=BP2cM4JvuRe1f5bH-G25OPJIQ5hanehq&return_attributes=gender,cloth_color&image_url=' + imageUrl;
         // var testURL = 'httpss://api-us.faceplusplus.com/humanbodypp/beta/detect?api_key=b6MXLXj9cETIUjDe4DMVy6SGuDlrtLko&api_secret=BP2cM4JvuRe1f5bH-G25OPJIQ5hanehq&return_attributes=gender,cloth_color&image_url=httpss://media.vanityfair.com/photos/5355688206bf36e64100009e/master/w_768,c_limit/scarlett-johansson-vanity-fair-ss04.jpg'
        $.ajax({
          url: queryURL,
          type: "POST"
          // Access-Control-Allow-Origin: *
        }).done(function(response) {
          $("#urlinput").val('');

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


          var innerURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=" + colorOne +","+ colorTwo +","+ searchGender + "-clothes&offset=0&limit=12";
          // var innerURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=" + colorOne +","+ colorTwo + "&offset=0&limit=12";
          // var innerURL = "https://api.shopstyle.com/api/v2/browse/"+ searchGender + "-clothes?pid=uid3849-40327957-94&fts=" + colorOne +","+ colorTwo + searchGender +"&offset=0&limit=12"
          $.ajax({
            url: innerURL,
            method: "GET"
          }).done(function(response) {
            console.log(response);

          for (var i = 0; i < response.products.length; i++) {


            event.preventDefault();



            var imgURL = response.products[i].image.sizes.Medium.url;
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;
            var itemOrigin = response.products[i].clickUrl;
            //
            // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
            // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
            //
            //
            //
            // $(itemLink).append(image);
            // console.log(itemLink);
            // $("#shopstyle").append(itemLink);

            var savedImage = {
              imgSource: imgURL,
              iPrice: price,
              bName: brandedName,
              iOrigin: itemOrigin
            };
            database.ref().push(savedImage);
        };
      });

        });
      };




      if (movie=="kfash") {
        var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=jackets,dresses&b=burberry&offset=0&limit=12";
        database.ref().remove();
        $("#shopstyle").empty();
        $.ajax({
        url: queryURL,
        method: "GET"
        }).done(function(response) {

          console.log(response);

          for (var i = 0; i < response.products.length; i++) {


            event.preventDefault();



            var imgURL = response.products[i].image.sizes.Medium.url;
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;
            var itemOrigin = response.products[i].clickUrl;

            // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
            // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
            //
            //
            //
            // $(itemLink).append(image);
            // console.log(itemLink);
            // $("#shopstyle").append(itemLink);

            var savedImage = {
              imgSource: imgURL,
              iPrice: price,
              bName: brandedName,
              iOrigin: itemOrigin
            };
            database.ref().push(savedImage);

          };

        });
      };


      if (movie=="jfash") {
        var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=jeans&b=gap&offset=0&limit=12";
        database.ref().remove();
        $("#shopstyle").empty();
        $.ajax({
        url: queryURL,
        method: "GET"
        }).done(function(response) {

          console.log(response);

          for (var i = 0; i < response.products.length; i++) {


            event.preventDefault();



            var imgURL = response.products[i].image.sizes.Medium.url;
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;
            var itemOrigin = response.products[i].clickUrl;

            // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
            // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
            //
            //
            //
            // $(itemLink).append(image);
            // console.log(itemLink);
            // $("#shopstyle").append(itemLink);

            var savedImage = {
              imgSource: imgURL,
              iPrice: price,
              bName: brandedName,
              iOrigin: itemOrigin
            };
            database.ref().push(savedImage);

        };

        });
      };

      if (movie=="sfash") {
        var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=dresses&b=versace,dior&offset=0&limit=12";
        database.ref().remove();
        $("#shopstyle").empty();
        $.ajax({
        url: queryURL,
        method: "GET"
        }).done(function(response) {

          console.log(response);

          for (var i = 0; i < response.products.length; i++) {


            event.preventDefault();



            var imgURL = response.products[i].image.sizes.Medium.url;
            var price = response.products[i].price;
            var brandedName = response.products[i].brandedName;
            var itemOrigin = response.products[i].clickUrl;

            // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
            // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
            //
            //
            //
            // $(itemLink).append(image);
            // console.log(itemLink);
            // $("#shopstyle").append(itemLink);

            var savedImage = {
              imgSource: imgURL,
              iPrice: price,
              bName: brandedName,
              iOrigin: itemOrigin
            };
            database.ref().push(savedImage);

        };

      });
    };
    if (movie=="mfash") {
      var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=jackets,dresses&b=everlane,topshop,zara&offset=0&limit=12";
      database.ref().remove();
      $("#shopstyle").empty();
      $.ajax({
      url: queryURL,
      method: "GET"
      }).done(function(response) {

        console.log(response);

        for (var i = 0; i < response.products.length; i++) {


          event.preventDefault();



          var imgURL = response.products[i].image.sizes.Medium.url;
          var price = response.products[i].price;
          var brandedName = response.products[i].brandedName;
          var itemOrigin = response.products[i].clickUrl;

          // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
          // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
          //
          //
          //
          // $(itemLink).append(image);
          // console.log(itemLink);
          // $("#shopstyle").append(itemLink);

          var savedImage = {
            imgSource: imgURL,
            iPrice: price,
            bName: brandedName,
            iOrigin: itemOrigin
          };
          database.ref().push(savedImage);

        };

    });
  };

  if (movie=="wfash") {
    var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=jackets,shirts&b=timberland,nudie&offset=0&limit=12";
    database.ref().remove();
    $("#shopstyle").empty();
    $.ajax({
    url: queryURL,
    method: "GET"
    }).done(function(response) {

    console.log(response);

    for (var i = 0; i < response.products.length; i++) {


      event.preventDefault();



      var imgURL = response.products[i].image.sizes.Medium.url;
      var price = response.products[i].price;
      var brandedName = response.products[i].brandedName;
      var itemOrigin = response.products[i].clickUrl;

      // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
      // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
      //
      //
      //
      // $(itemLink).append(image);
      // console.log(itemLink);
      // $("#shopstyle").append(itemLink);

      var savedImage = {
        imgSource: imgURL,
        iPrice: price,
        bName: brandedName,
        iOrigin: itemOrigin
      };
      database.ref().push(savedImage);

      };

    });
  };

  if (movie=="dfash") {
    var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=jackets,shirts&b=hugo-boss&offset=0&limit=12";
    database.ref().remove();
  $("#shopstyle").empty();
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

    console.log(response);

    for (var i = 0; i < response.products.length; i++) {


      event.preventDefault();



      var imgURL = response.products[i].image.sizes.Medium.url;
      var price = response.products[i].price;
      var brandedName = response.products[i].brandedName;
      var itemOrigin = response.products[i].clickUrl;

      // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
      // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
      //
      //
      //
      // $(itemLink).append(image);
      // console.log(itemLink);
      // $("#shopstyle").append(itemLink);

      var savedImage = {
        imgSource: imgURL,
        iPrice: price,
        bName: brandedName,
        iOrigin: itemOrigin
      };
      database.ref().push(savedImage);

  };

  });
};



    if (movie=="jdfash") {
      var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=blazer,shirt&b=idle-man,vito&offset=0&limit=12";
      database.ref().remove();
      $("#shopstyle").empty();
      $.ajax({
      url: queryURL,
      method: "GET"
      }).done(function(response) {

      console.log(response);

      for (var i = 0; i < response.products.length; i++) {


        event.preventDefault();



        var imgURL = response.products[i].image.sizes.Medium.url;
        var price = response.products[i].price;
        var brandedName = response.products[i].brandedName;
        var itemOrigin = response.products[i].clickUrl;

        // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
        // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
        //
        //
        //
        // $(itemLink).append(image);
        // console.log(itemLink);
        // $("#shopstyle").append(itemLink);

        var savedImage = {
          imgSource: imgURL,
          iPrice: price,
          bName: brandedName,
          iOrigin: itemOrigin
        };
        database.ref().push(savedImage);

        };

      });
    };

if (movie=="afash") {
  var queryURL = "https://api.shopstyle.com/api/v2/products?pid=uid3849-40327957-94&fts=pants,shirt,blazer&b=hugo-boss,ted-baker&offset=0&limit=12";
  database.ref().remove();
  $("#shopstyle").empty();
  $.ajax({
  url: queryURL,
  method: "GET"
  }).done(function(response) {

    console.log(response);

    for (var i = 0; i < response.products.length; i++) {


      event.preventDefault();



      var imgURL = response.products[i].image.sizes.Medium.url;
      var price = response.products[i].price;
      var brandedName = response.products[i].brandedName;
      var itemOrigin = response.products[i].clickUrl;

      // var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
      // var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");
      //
      //
      //
      // $(itemLink).append(image);
      // console.log(itemLink);
      // $("#shopstyle").append(itemLink);

      var savedImage = {
        imgSource: imgURL,
        iPrice: price,
        bName: brandedName,
        iOrigin: itemOrigin
      };
      database.ref().push(savedImage);

      };
    });
  };




};
// End of main function
  database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    // Store everything into a variable.

    var imgURL = childSnapshot.val().imgSource;
    var price = childSnapshot.val().iPrice;
    var brandedName = childSnapshot.val().bName;
    var itemOrigin = childSnapshot.val().iOrigin;

    //add to HTML div
    var itemLink = $('<a>').attr({href: itemOrigin, target: '_blank'});
    var image = $("<img>").attr({src: imgURL, title: '$' + price + ', ' + brandedName}).attr("class", "fashimage img-responsive");

    $(itemLink).append(image);
    $("#shopstyle").append(itemLink);

// $(window).on("load", function ( {
//
// }))

// Having trouble clearing firebase
    //
    // $("#shopstyle").empty();
    });



$(document).on("click", ".iconbutton", displayMovieInfo);
$(document).on("click", ".go-btn", displayMovieInfo);
$(document).on("click", ".emotionbutton", displayMovieInfo);
