"use strict";
var db = require('../db-connection');


class CommentsDB {
    getAllComments(comment, callback) {
        var sql = "SELECT * from comments WHERE restaurant__id=?";
        db.query(sql, comment, callback)
    }
    getAllRestaurantComments(callback) {
        var sql = "SELECT * from restaurant_review.comments";
        db.query(sql, callback);
    }

    addComment(comment, callback) {
        var sql = "INSERT INTO comments (restaurant__id, user_id, restaurant, username,review, rating, datePosted) VALUES (?, ?, ?, ?, ?, ?, ?)";
        db.query(sql, [comment.getRestaurant_id(), comment.getUserId(), comment.getRestaurant(), comment.getUsername(), comment.getReview(), comment.getRating(), comment.getDatePosted()], callback);
    }

    deleteComment(comment_id, callback) {
        var sql = "DELETE from comments WHERE comment_id = ?";
        return db.query(sql, [comment_id], callback)

    }

    updateComment(comment, callback) {
        var sql = "UPDATE comments SET review = ?,rating = ?, datePosted = ? WHERE comment_id = ?";
        return db.query(sql, [comment.getReview(), comment.getRating(), comment.getDatePosted(), comment.getComment_id()], callback);
    }
    getHighestRating(restaurant__id, callback) {
        var sql = 'SELECT* FROM comments WHERE restaurant__id = 1 ORDER BY comments.rating DESC;'
        db.query(sql, [restaurant__id], callback)

    }
    getLowestRating(restaurant__id, callback) {
        var sql = 'SELECT* FROM comments WHERE restaurant__id = 1 ORDER BY comments.rating ASC;'
        db.query(sql, [restaurant__id], callback)

    }
    deleteAllComments(user_id, callback) {
        var sql = "DELETE from comments WHERE user_id = ?";
        return db.query(sql, [user_id], callback)


    }
    
getOneReview(reviewID, callback){
    var sql = "SELECT * from restaurant_review.comments WHERE comment_id = ?";
    db.query(sql, [reviewID], callback);
}
}
module.exports = CommentsDB;