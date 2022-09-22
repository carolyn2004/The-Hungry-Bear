"use strict"

class UserProfile {
    constructor(user_id, username, password, first_name, last_name, gender, address, email, mobile_number, user_image) {
        this.user_id = user_id;
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.address = address;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.user_image = user_image;
    }
    getUserId() {
        return this.user_id;
    }
    getUsername() {
        return this.username;
    }
    getPassword() {
        return this.password;
    }
    getFirst_name() {
        return this.first_name
    }
    getLast_name() {
        return this.last_name;
    }
    getGender() {
        return this.gender;
    }
    getAddress() {
        return this.address;
    }

    getEmail() {
        return this.email;
    }
    
    getMobile_number() {
        return this.mobile_number;
    }
    getUserImage(){
        return this.user_image
    }
}
module.exports = UserProfile;