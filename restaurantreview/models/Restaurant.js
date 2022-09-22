"use strict"

class Restaurant {
    constructor(restaurant_id, title,image, cuisine,about,map,region, restaurant_address, contact, operating_hours,rating) {
        this.restaurant_id = restaurant_id;
        this.title = title
        this.image = image
        this.cuisine = cuisine
        this.about = about;
        this.map = map;
        this.region = region
        this.restaurant_address = restaurant_address;
        this.contact = contact;
        this.operating_hours = operating_hours;
        this.rating = rating
        
    }

    getRestaurant_id() {
        return this.restaurant_id;
    }
    getRestaurant_title() {
        return this.title;
    }
    getImage() {
        return this.image
    }
    getCuisine() {
        return this.cuisine;
    }
    getAbout() {
        return this.about;
    }
    getMap() {
        return this.map;
    }
   
    getRegion() {
        return this.region;
    }
    getRestaurant_address() {
        return this.restaurant_address;
    }
        
    
    getContact() {
        return this.contact;


    }
    getOperating_hours() {
        return this.operating_hours;

    }
    getRating(){
        return this.rating
    }

}

module.exports = Restaurant;