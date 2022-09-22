"use strict";
var db = require('../db-connection');

class UserProfileDB {

    login(username,password,callback) {
        var sql = "SELECT user_id,username from user_profile WHERE username = ? AND password = ?";
        db.query(sql,[username,password],callback)
    }
    addUser(user_profile,callback) {

        var sql = "INSERT INTO user_profile (user_id, username, password, first_name, last_name, gender,address, email, mobile_number,user_image) VALUES (?,?,?,?,?,?,?,?,?,?)"
        db.query(sql, [user_profile.getUserId(),user_profile.getUsername(), user_profile.getPassword(), user_profile.getFirst_name(), user_profile.getLast_name(), user_profile.getGender(), user_profile.getAddress(), user_profile.getEmail(),  user_profile.getMobile_number(),user_profile.getUserImage()],callback)

    }

    updateProfile(user_profile, callback){
		var sql = "UPDATE user_profile SET  password = ?,email = ?, address =?, mobile_number=?  WHERE user_id = ?";	
		db.query(sql, [user_profile.getPassword(), user_profile.getEmail(), user_profile.getAddress(),user_profile.getMobile_number(),user_profile.getUserId()], callback);
    }

    deleteUser(user_id, callback) {
        var sql = "DELETE from user_profile WHERE user_id = ?";
        db.query(sql,[user_id], callback)

    }
    getAllUsers(callback){
        var sql = "SELECT * from user_profile";
		db.query(sql, callback);
    }
    getUserDetails(user_id,callback){
        var sql = "SELECT * from user_profile where user_id=?";
        db.query(sql, [user_id], callback);
    }

}
module.exports = UserProfileDB;