
var config = {
    apiKey: "AIzaSyAU8cQZBKgaROIKXMp430csQ9FvoiK_UPM",
    authDomain: "trainschedule-be074.firebaseapp.com",
    databaseURL: "https://trainschedule-be074.firebaseio.com",
    projectId: "trainschedule-be074",
    storageBucket: "trainschedule-be074.appspot.com",
    messagingSenderId: "832800897657"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

function SaveData(Price, ImageURL, BrandName)
{
  event.preventDefault();
  var newImage = {
    name: BrandName,
    Price: Price,
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

  // Train Info
  console.log(Name);
  console.log(Price);
  console.log(ImageURL);

  //add to HTML div

  $("<img>").attr({src: ImageURL, title: ['$' + Price,Name]}).attr("class", "fashimage");
  $("#shopstyle").append(image);
  });
