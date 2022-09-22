"use strict";

class Comment {
    constructor(comment_id, restaurant__id, user_id,restaurant,username, review,  rating, datePosted) {
        this.comment_id = comment_id;
        this.restaurant__id = restaurant__id;
        this.user_id = user_id
        this.restaurant = restaurant;
        this.username = username;
        this.review = review;
        this.rating = rating;
        this.datePosted = datePosted;
    }

    getComment_id() {
        return this.comment_id;
    }

    getRestaurant_id() {
        return this.restaurant__id;
    }
    getUserId() {
        return this.user_id
    }
    getRestaurant() {
        return this.restaurant;
    }
    getUsername() {
        return this.username;
    }

    getReview() {
        return this.review;
    }

    getRating() {
        return this.rating;
    }

    getDatePosted() {
        return this.datePosted;
    }

    setRestaurant_id(restaurant_id) {
        this.restaurant_id = restaurant_id;
    }

    setRestaurant(restaurant) {
        this.restaurant = restaurant;
    }
    setUsername(username) {
        this.username = username;
    }

    setReview(review) {
        this.review = review;
    }

    setRating(rating) {
        this.rating = rating;
    }

    setDatePosted(datePosted) {
        this.datePosted = datePosted;
    }
}

module.exports = Comment;