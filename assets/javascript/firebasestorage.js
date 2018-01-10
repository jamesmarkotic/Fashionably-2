
var config = {
    apiKey: "AIzaSyAF5EQQcMjKOS8sjk59vsEn3grMYTFLG8A",
    authDomain: "fashionably-f68d1.firebaseapp.com",
    databaseURL: "https://fashionably-f68d1.firebaseio.com",
    projectId: "fashionably-f68d1",
    storageBucket: "fashionably-f68d1.appspot.com",
    messagingSenderId: "214704986736"
  };
firebase.initializeApp(config);
var database = firebase.database();

function SaveData(Price, ImageURL, BrandName)
{
  event.preventDefault();
  var newImage = {
    name: brandName,
    price: Price,
    ImageURL: ImageURL
  };
  database.ref().push(newImage);
  // Logs everything to console
  console.log(newImage.name);
  console.log(newImage.Price);
  //console.log(newImage.Retailer);
  console.log(newImage.ImageURL);


};
// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());
  // Store everything into a variable.
  var Name = childSnapshot.val().name;
  var Price = childSnapshot.val().Price;
  var ImageURL = childSnapshot.val().ImageURL;

  console.log(Name);
  console.log(Price);
  console.log(ImageURL);

  //add to HTML div

  $("<img>").attr({src: ImageURL, title: ['$' + Price,Name]}).attr("class", "fashimage");
  $("#shopstyle").append(image);
  });
