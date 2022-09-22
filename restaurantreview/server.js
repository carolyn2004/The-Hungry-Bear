var express = require("express");
var app = express(); // set variable app to be an instance of express framework. From now on, app is the express
var commentController = require('./controllers/commentController'); // set commentController to the commentController class
var restaurantController = require('./controllers/restaurantController');
var userprofileController = require('./controllers/userprofileController');
var favoriteController = require('./controllers/favoriteController');

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

//comment
app.route('/getAllComments/:id').get(commentController.getAllComments);// working
app.route('/addComment').post(commentController.addComment);// working
app.route('/deleteComment/:id').delete(commentController.deleteComment); // working
app.route('/updateComment/:id').put(commentController.updateComment);//working
app.route('/Highest/:id').get(commentController.getHighestRating);//working
app.route('/Lowest/:id').get(commentController.getLowestRating);//working
app.route('/getAllRestaurantComments').get(commentController.getAllRestaurantComments);
app.route('/deleteAllComments/:user_id').delete(commentController.deleteAllComments);
app.route('/getOneReview/:comment_id').get(commentController.getOneReview);
//restaurant
app.route('/addRestaurant').post(restaurantController.addRestaurant);// working
app.route('/All').get(restaurantController.getFeaturedRestaurant);// working
app.route('/getRestaurantRating/:id').get(restaurantController.getRestaurantRating);// working
app.route('/SearchBar/:user_input').get(restaurantController.SearchBar);//working
app.route('/getRestaurant/:id').get(restaurantController.getRestaurant);

app.route('/East').get(restaurantController.getRegionEast);// working
app.route('/North').get(restaurantController.getRegionNorth);//working
app.route('/South').get(restaurantController.getRegionSouth);//working
app.route('/West').get(restaurantController.getRegionWest);//working

app.route('/Chinese').get(restaurantController.getCuisineChinese);// working
app.route('/Malay').get(restaurantController.getCuisineMalay);// working
app.route('/Indian').get(restaurantController.getCuisineIndian);// working
app.route('/Western').get(restaurantController.getCuisineWestern);// working
app.route('/Japanese').get(restaurantController.getCuisineJapanese);// working


//userprofile
app.route('/login').post(userprofileController.login);//working
app.route('/adduser').post(userprofileController.addUser);// working 
app.route('/updateProfile/:id').put(userprofileController.updateProfile);// working
app.route('/deleteUser/:id').delete(userprofileController.deleteUser);// working
app.route('/getAllUsers').get(userprofileController.getAllUsers);// working
app.route('/getUserDetails/:id').get(userprofileController.getUserDetails);//working

//favourites
app.route('/addNewFavourite/:userid/:restaurantid').post(favoriteController.addNewFavourite);//working
app.route('/getUserFavourites/:userid').get(favoriteController.getUserFavourites);//working
app.route('/deleteFavourite/:favourites_id').delete(favoriteController.deleteFavourite);//working
app.route('/deleteAllFavourites/:user_id').delete(favoriteController.deleteAllFavourites);//working

app.listen(8080, "127.0.0.1"); // start the nodejs to be listening for incoming request @ port 8080
console.log("web server running @ http://127.0.0.1:8080"); 
