"use strict";

class Favorites {
    constructor(user_id, restaurant__id) {
        this.user_id = user_id
        this.restaurant__id = restaurant__id;
    }
    getUserId() {
        return this.user_id
    }
    getRestaurant_id() {
        return this.restaurant__id;
    }
}

module.exports = Favorites;


