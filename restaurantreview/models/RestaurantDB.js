"use strict";
var db = require('../db-connection');


class RestaurantDB {
    addRestaurant(restaurant,callback) {
        var sql = 'INSERT INTO restaurant (title,image, cuisine, about, map, region, restaurant_address, contact, operating_hours) VALUES (?,?,?,?,?,?,?,?,?)'
        db.query(sql,[restaurant.getRestaurant_title(),restaurant.getImage(),restaurant.getCuisine(),restaurant.getAbout(),restaurant.getMap(), restaurant.getRegion(), restaurant.getRestaurant_address(), restaurant.getContact(),restaurant.getOperating_hours()],callback)
    }
    getFeaturedRestaurant(callback) {
        var sql = 'SELECT * from restaurant'    
        db.query(sql,callback)

    }
    getRestaurant(restaurant__id, callback){
        var sql = "SELECT * from restaurant_review.restaurant WHERE restaurant__id = ?";
        db.query(sql, [restaurant__id], callback);
    }
    getRestaurantRating(restaurant__id,callback){
        var sql = 'SELECT IFNULL(AVG(restaurant_review.comments.rating), 0 ) as average_rating FROM restaurant_review.comments, restaurant_review.restaurant WHERE restaurant_review.comments.restaurant__id = ?;'
        db.query(sql,[restaurant__id],callback)
    }
    getRegionEast(callback){
        var sql = 'SELECT * from restaurant WHERE region = "East"'
        db.query(sql, callback)
    }
    getRegionNorth(callback){
        var sql = 'SELECT * from restaurant WHERE region = "North"'
        db.query(sql, callback) 
    }
    getRegionSouth(callback){
        var sql = 'SELECT * from restaurant WHERE region = "South"'
        db.query(sql, callback) 
    }
    getRegionWest(callback){
        var sql = 'SELECT * from restaurant WHERE region = "West"'
        db.query(sql, callback) 
    }
    getCuisineChinese(callback){
        var sql = 'SELECT * from restaurant WHERE cuisine = "Chinese"'
        db.query(sql, callback) 
    }
    getCuisineMalay(callback){
        var sql = 'SELECT * from restaurant WHERE cuisine = "Malay"'
        db.query(sql, callback) 
    }
    getCuisineIndian(callback){
        var sql = 'SELECT * from restaurant WHERE cuisine = "Indian"'
        db.query(sql, callback) 
    }
    getCuisineWestern(callback){
        var sql = 'SELECT * from restaurant WHERE cuisine = "Western"'
        db.query(sql, callback) 
    }
    getCuisineJapanese(callback){
        var sql = 'SELECT * from restaurant WHERE cuisine = "Japanese"'
        db.query(sql, callback) 
    }

    SearchBar(user_input,callback){
        var sql = "SELECT * from restaurant WHERE title LIKE '%"+ user_input +"%'"
        db.query(sql,[user_input], callback) 
    }

    

}
module.exports = RestaurantDB;