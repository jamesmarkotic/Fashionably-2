// 1. Initialize Firebase
// 2. Create button for adding new employees - then update the html + update the database
// 3. Create a way to retrieve employees from the employee database.
// 4. Create a way to calculate the Next Train arrival time based on current time. Using difference between start and current time.
//    Then use moment.js formatting to set difference in months.
// 5. Calculate Minutes away for Next Train arrival from curren time
// 1. Initialize Firebase
// var config = {
//   apiKey: "AIzaSyA_QypGPkcjPtylRDscf7-HQl8ribnFeIs",
//   authDomain: "time-sheet-55009.firebaseapp.com",
//   databaseURL: "https://time-sheet-55009.firebaseio.com",
//   storageBucket: "time-sheet-55009.appspot.com"
// };
// firebase.initializeApp(config);
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
// 2. Button for adding Employees
function SaveData(Price, ImageURL, BrandName)
{
  event.preventDefault();
  // Creates local "temporary" object for holding employee data
  var newImage = {
    name: BrandName,
    Price: Price,
    ImageURL: ImageURL
  };
  // Uploads train data to the database
  database.ref().push(newImage);
  // Logs everything to console
  console.log(newImage.name);
  console.log(newImage.Price);
  //console.log(newImage.Retailer);
  console.log(newImage.ImageURL);
  // Alert
  // alert("Image successfully added");

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
