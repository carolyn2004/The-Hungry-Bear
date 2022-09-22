"use strict"

const UserProfileDB = require('../models/UserProfileDB');//put in controller
const UserProfile = require('../models/UserProfile');//put in controller
var userprofileDB = new UserProfileDB();

function login(request, respond){

	var username = request.body.username;
	var password = request.body.password;
	
	userprofileDB.login(username, password, function(error, result){
		if(error){
			throw error;
		}
		else if (result.length > 0) {
			return respond.json ({message: "success", user_id: result[0].user_id, username: result[0].username });
		}
		else{
			return respond.json ({message: "fail"});
		}
	});
}

function addUser(request, respond) {
    var userprofile = new UserProfile(null, request.body.username, request.body.password, request.body.first_name, request.body.last_name, request.body.gender, request.body.address, request.body.email, request.body.mobile_number, request.body.user_image);
    userprofileDB.addUser(userprofile, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getAllUsers(request, respond){
    userprofileDB.getAllUsers(function(error, result){
         if(error){
             throw error;
         }
         else{
             respond.json(result);
         }
     });
 }


function updateProfile(request, respond){
	var userprofile = new UserProfile(parseInt(request.params.id),request.body.username, request.body.password, request.body.first_name, request.body.last_name, request.body.gender,request.body.address, request.body.email,  request.body.mobile_number);
	
	userprofileDB.updateProfile(userprofile, function(error, result){
		if(error){
			throw error;
		}
		else{
			respond.json(result);
		}
	});
}

function deleteUser(request, respond) {
    var user_id = request.params.id;
    userprofileDB.deleteUser(user_id, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    })
}

function getUserDetails(request, respond) {
    var user_id = request.params.id;
    userprofileDB.getUserDetails(user_id, function (error, result) {
        if (error) {
            throw error;
        }
        else {
            respond.json(result);
        }
    });
}

module.exports = {login,addUser,updateProfile,deleteUser,getAllUsers,getUserDetails};