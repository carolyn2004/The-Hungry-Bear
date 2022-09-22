"use strict"
const FavoritesDB = require('../models/FavoritesDB');//put in controller
const Favorites = require('../models/Favorites');//put in controller
var favoriteDB = new FavoritesDB();

function addNewFavourite(request, respond) {
    var user_id = request.params.userid
    var restaurant__id = request.params.restaurantid
    var favorite = new Favorites(user_id, restaurant__id);
    favoriteDB.addNewFavourite(favorite, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    })
}

function getUserFavourites(request, respond) {
    var user_id = request.params.userid;
    favoriteDB.getUserFavourites(user_id, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    })
}

function deleteFavourite(request, respond) {
    var favourites_id = request.params.favourites_id;
    favoriteDB.deleteFavourite(favourites_id, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result)
        }
    })
}
function deleteAllFavourites(request, respond) {
    var user_id = request.params.user_id;
    favoriteDB.deleteAllFavourites(user_id, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result)
        }
    })
}

module.exports = { addNewFavourite, deleteAllFavourites, getUserFavourites, deleteFavourite }