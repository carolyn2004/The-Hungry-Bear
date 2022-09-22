"use strict";
var db = require('../db-connection');

class FavoritesDB {
    addNewFavourite(favorite, callback) {
        var sql = `INSERT INTO favorites (user_id, restaurant__id) VALUES (?,?)`
        db.query(sql,[favorite.getUserId(), favorite.getRestaurant_id()],callback);
    }

    getUserFavourites(user_id,callback) {
        var sql =  "SELECT restaurant_review.restaurant.*, restaurant_review.favorites.* FROM restaurant_review.favorites, restaurant_review.restaurant WHERE restaurant_review.favorites.restaurant__id = restaurant_review.restaurant.restaurant__id AND user_id = ?;";
        db.query(sql,[user_id],callback)
    }
    // getUserFavourites2(user_id,callback)
    //     var sql 

    deleteFavourite(favourites_id,callback) {
        var sql = `DELETE from favorites WHERE favourites_id=? `;
        db.query(sql,[favourites_id],callback)
    }
    deleteAllFavourites(user_id,callback) {
        var sql = `DELETE from favorites WHERE user_id=? `;
        db.query(sql,[user_id],callback)
    }
    


}
module.exports = FavoritesDB;