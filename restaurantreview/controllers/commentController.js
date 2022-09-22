"use strict"

const CommentsDB = require('../models/CommentsDB');//put in controller
const Comment = require('../models/Comment');//put in controller
var commentsDB = new CommentsDB();

function getAllComments(request, respond){
    var comment = request.params.id;
    commentsDB.getAllComments(comment,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}
function getAllRestaurantComments(request, respond){
    commentsDB.getAllRestaurantComments(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}

function addComment(request, respond) {
    var now = new Date();
    var comment = new Comment(null,request.body.restaurant__id,request.body.user_id, request.body.restaurant, request.body.username, request.body.review, request.body.rating, now.toString());
    
    commentsDB.addComment(comment, function (error, result) {
        if (error) {
            respond.json(error);
        }
        else {
            respond.json(result);
        
        }
    })
}

function updateComment(request, respond){
    var now = new Date();
    var comment = new Comment(parseInt(request.params.id), request.body.restaurant__id, request.body.user_id, request.body.restaurant, request.body.username, request.body.review,request.body.rating, now.toString());
    commentsDB.updateComment(comment, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function deleteComment(request, respond){
    var comment_id = request.params.id;
    commentsDB.deleteComment(comment_id, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getHighestRating(request,respond){
    var restaurant__id = request.params.id;
    commentsDB.getHighestRating(restaurant__id,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}
function getLowestRating(request,respond){
    var restaurant__id = request.params.id;
    commentsDB.getLowestRating(restaurant__id,function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });

}
function deleteAllComments(request, respond){
    var user_id = request.params.user_id;
    commentsDB.deleteAllComments(user_id, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}
function getOneReview(request, respond){
    var reviewID = request.params.comment_id;
    commentsDB.getOneReview(reviewID, function(error, result){
        if(error){
            respond.json(error);
        }
  else{
   respond.json(result);
  }
    });
}








module.exports = {getOneReview, getAllComments,deleteAllComments, getAllRestaurantComments,addComment,updateComment,deleteComment,getHighestRating,getLowestRating};