"use strict"

const RestaurantDB = require('../models/RestaurantDB');//put in controller
const Restaurant = require('../models/Restaurant');//put in controller
var restaurantDB = new RestaurantDB(); //function

function addRestaurant(request, respond) {
    var restaurant = new Restaurant(null, request.body.title, request.body.image, request.body.cuisine, request.body.about, request.body.map, request.body.region, request.body.restaurant_address, request.body.contact, request.body.operating_hours);
    restaurantDB.addRestaurant(restaurant, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });

}
function getRestaurant(request, respond){
	var restaurant__id = request.params.id;
	
	restaurantDB.getRestaurant(restaurant__id, function(error, result){
		if(error){
			throw error;
		}
		else{
			respond.json(result);
		}
	});
}

function getFeaturedRestaurant(request, respond) {
    restaurantDB.getFeaturedRestaurant(function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}
function getRestaurantRating(request, respond) {
    var restaurant__id = request.params.id;
    restaurantDB.getRestaurantRating(restaurant__id, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}
function getRegionEast(request, respond) {
    restaurantDB.getRegionEast(function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}
function getRegionNorth(request, respond) {
    restaurantDB.getRegionNorth(function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}
function getRegionSouth(request, respond) {
    restaurantDB.getRegionSouth(function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}
function getRegionWest(request, respond) {
    restaurantDB.getRegionWest(function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}
function getCuisineChinese(request, respond) {
    restaurantDB.getCuisineChinese(function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}
function getCuisineMalay(request, respond) {
    restaurantDB.getCuisineMalay(function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}
function getCuisineIndian(request, respond) {
    restaurantDB.getCuisineIndian(function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}
function getCuisineWestern(request, respond) {
    restaurantDB.getCuisineWestern(function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}
function getCuisineJapanese(request, respond) {
    restaurantDB.getCuisineJapanese(function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}
function SearchBar(request, respond) {
    var user_input = request.params.user_input
    restaurantDB.SearchBar(user_input,function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}




module.exports = { getFeaturedRestaurant,getRestaurant, addRestaurant, getRestaurantRating, getRegionEast, getRegionNorth, getRegionWest,getRegionSouth,getCuisineChinese,getCuisineMalay,getCuisineIndian,getCuisineWestern,getCuisineJapanese,
     SearchBar}