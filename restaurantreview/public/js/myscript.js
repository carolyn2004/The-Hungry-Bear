
function getAllrestaurants() {
    var response = "";

    var request = new XMLHttpRequest();

    request.open("GET", "/All", false);
    request.setRequestHeader("Content-Type", "application/json");
    
    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response);
        var HTML = ""
        for (let i = 0; i < response.length; i++) {

            HTML += '<div class="col-sm-4">' +
                '<!-- Restaurant Card Template -->' +
                '<div style="float: none; margin: 0 auto;">' +
                '<div class="card" style="margin:20px 0 20px 0;">' +
                '<a class="card-block stretched-link" href="restaurant_info.html?restaurant__id=' + response[i].restaurant__id + '"></a>' +
                '<img class="card-img-top" src="' + response[i].image + '" alt="Card image cap">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + response[i].title + '</h5>' +
                

                '<span class="badge badge-secondary float-right" style="background-color: gray;">' + response[i].cuisine + '</span>' +

                '</div>' +
                '</div>' +
                '</div>' +

                '</div>' +
                '</div>'
        }
        document.getElementById('restaurantList').innerHTML = HTML
        
        
    };

    request.send();
}

function Login() {
    var response = "";

    var jsonData = new Object();
    jsonData.username = document.getElementById("UserName").value;
    jsonData.password = document.getElementById("Password").value;
    console.log(jsonData.username)
    console.log(jsonData.password)
    var request = new XMLHttpRequest();

    request.open("POST", "/login", true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response);
        if (response.message == "success") {

            alert('Congrats, You have successfully logged in.');

            sessionStorage.setItem('user_id', response.user_id);
            localStorage.setItem('user_id', response.user_id);
            sessionStorage.setItem('username', response.username);
            //sessionStorage.setItem('password', response.password);

            window.location = 'index.html'

        }
        else if (response.message == "fail") {
            alert('Invalid input, try again.')
        }
    };

    request.send(JSON.stringify(jsonData));
}


function getOneRestaurant(element) {
    var response = "";
    var request = new XMLHttpRequest();

    var urlParams = new URLSearchParams(window.location.search);
    var restaurant__id = urlParams.get("restaurant__id");
  

    request.open("GET", "/getRestaurant/" + restaurant__id, true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        info_array = JSON.parse(request.responseText);
        sessionStorage.setItem('restaurant__id', info_array[0].restaurant__id);
        sessionStorage.setItem('title', info_array[0].title);
        response = JSON.parse(request.responseText);
        console.log(response);
        var HTML = ""
        for (let i = 0; i < response.length; i++) {

            HTML +=
                "<div class='row row-no-gutters'>" +

                "<img id='res_image' src='" + response[i].image + "'" +
                "style='padding: 0 5% 0 5%; display: block; margin-left: auto; margin-right: auto; width: 75%; height: 500px; object-fit: cover;'></img>" +
                "<div id='restaurant_details' class='container featured-box';'>" +
                "<h2  id='res_name' style='width: 500px; color: red;'>" + response[i].title + "</h2>" +
                "<div style='padding-bottom: 50px;'>" +
                "<span id='res_badge' class='badge badge-secondary float-left'>" +
                "<div id='res_cuisine' style='font-size:medium;background-color: gray;'>" + response[i].cuisine +
                "</div>" +
                "</span>" +
                "<div class='line'> </div>" +
                "</div>" +
                "<div style='padding-top: 0px;'>" +
                "<div style='margin-top: 0px'> " +
                "<div class='col-sm-4'>" +
                "<h3>About</h3>" +
                "<p id='description' style='width: 600px; border-bottom: 1px solid black; border-style: solid; border-top: none; border-left: none; border-right: none; padding-bottom: 20px; '>" + response[i].about + "</p>" +

                "<h3> Location </h3>" +
                "<iframe src='" + response[i].map + "'" +
                "width='700' height='300' style='border:0;' allowfullscreen='' loading='lazy'></iframe>" +
                "<p id='description' style='width: 600px; border-bottom: 1px solid black; border-style: solid; border-top: none; border-left: none; border-right: none; padding-bottom: 20px; '>" + "</div>" + "</div>" +
                "</div>" +

                '<div class="card" style="width: 20rem; position: absolute; margin-left: 910px; padding-top: 10px;">' +
                '<div class="card-body">' +
                '<p id="res_address" class="card-text"></p>' +
                '<h5 class="card-title"><b>Address</b></h5>' +
                "<p>" + response[i].restaurant_address +

                "</p>" +
                '<div id="card" style="height:100px; width: 285px;"> </div>' +
                '</div>' +
                '</div>' +

                '<div class="card" style="width: 20rem; position: absolute; margin-left: 910px; margin-top: 250px;">' +
                '<div class="card-body">' +
                '<h5 class="card-title"><b>Contact Details</b></h5>' +
                '<p class="card-text">' +
                '<div>' +
                '<i class="fa fa-phone"></i>' + ' ' + response[i].contact +

                '</div>' +
                '<div style="width:250px;white-space:nowrap; overflow: hidden; text-overflow: ellipsis;">' +
                '</div>' +
                '</p>' +
                '</div>' +
                '</div>' +
                '<div class="card" style="width: 20rem; position: absolute; margin-left: 910px; margin-top: 350px;">' +
                '<div class="card-body">' +
                '<h5 class="card-title"><b>Operating Hours</b></h5>' +
                '<p id="res_hours" class="card-text" style="width: 190px">' +
                '</p>' + response[i].operating_hours +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' 
                
             


        };
        document.getElementById('restaurantinfo').innerHTML = HTML
       
    };

    request.send();
}
function register() {
    var response = "";
    var userinfo = new Object();

    userinfo.username = document.getElementById("UserName").value;
    userinfo.password = document.getElementById("Password").value;
    userinfo.first_name = document.getElementById("firstname").value;
    userinfo.last_name = document.getElementById("lastname").value;
    userinfo.gender = document.getElementById("gender").value;
    userinfo.address = document.getElementById("address").value;
    userinfo.email = document.getElementById("email").value;
    userinfo.mobile_number = document.getElementById("mobilenumber").value;
    var request = new XMLHttpRequest();

    request.open("POST", "/adduser", true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);
        if (response.affectedRows === 1) {
            alert('Registered successfully!');
            window.location = "login.html";
        }
        else {
            alert('Unsuccessful registration!')
        }

    };

    request.send(JSON.stringify(userinfo));
}


function enableSignUp() {
    var sign_up_button = document.getElementById("btnSignUp");
    var username = document.getElementById("UserName").value;
    var password = document.getElementById("Password").value;
    var first_name = document.getElementById("firstname").value;
    var last_name = document.getElementById("lastname").value;
    var gender = document.getElementById("gender").value;
    var address = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var mobile_number = document.getElementById("mobilenumber").value;
    if (username != "" && password != "" && first_name != "" && last_name != "" && gender != "" && address != "" && email != "" && mobile_number != "") {
        console.log("enable")
        sign_up_button.disabled = false;
    }

    else {
        sign_up_button.disabled = true;
    }
}
function viewProfile() {
    var url = `/getUserDetails/${sessionStorage.getItem("user_id")}`;
    console.log(url)
    var request = new XMLHttpRequest();

    request.open('GET', url, true);
    request.onload = function () {

        // get profile details
        var user_info = JSON.parse(request.responseText);

        user_fn.value = user_info[0].first_name;
        user_ln.value = user_info[0].last_name;
        user_un.value = user_info[0].username;
        user_gender.value = user_info[0].gender;


    }
    request.send();
}
function updateProfile() {
    
    var response = "";
    var userinfo = new Object();

    userinfo.address = document.getElementById("user_address").value;
    userinfo.email = document.getElementById("user_email").value;
    userinfo.mobile_number = document.getElementById("user_number").value;
    userinfo.password = document.getElementById("password_confirm").value;

    var request = new XMLHttpRequest();

    request.open("PUT", "/updateProfile/" + sessionStorage.getItem("user_id"), true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);

        if (response.affectedRows === 1) {
            alert('Updated successfully!');
            window.location = "profile.html?user_id=" + sessionStorage.getItem("user_id");
        }

        else {
            alert('Unable to update details, try again!')

        }
    };

    request.send(JSON.stringify(userinfo));
}
function logOut() {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = 'index.html';
}
function fetchComments() {
    var response = "";

    var request = new XMLHttpRequest();

    var urlParams = new URLSearchParams(window.location.search);
    var restaurant__id = urlParams.get('restaurant__id');

    request.open('GET', "/getAllComments/" + restaurant__id, true);
    request.setRequestHeader("Content-Type", "application/json");

    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        response = JSON.parse(request.responseText);
        console.log(response);
        var HTML = ""
        for (let i = 0; i < response.length; i++) {
//i is the array position
            HTML +=
            "<div class='container' >" +
            "<div class='comment row'>" +
              "<div class='col-2' style='text-align: center; padding-top: 10px'>"+
                "<img src='https://icon-library.com/images/icon-emotions/icon-emotions-12.jpg' style='border-radius: 50%; width: 60px; max-width:60px; object-fit: cover;'>"+
                
               "</div>"+
                "<div class='col-sm-8'>"+
                  "<h5 style='display:inline-block; width: 150px; max-width: 150px;'>" + "<b>" + response[i].username + "</b>" + "</h5>"+
                  
                  "<span style='display: inline-block; padding-left: 90px;'>" + response[i].datePosted + "</span>"+

                  "<span style='display: block'>"+ response[i].rating + 
                  "/5"+ " " + "<span class='fa fa-star checked'></span>" + 
                  "</span>"+
                  "<p>" + response[i].review + "</p>"+
                  "<span class='modify-buttons'>"+
                    "<span> <button id='editReview' onclick='savingCommentPosition(" + response[i].comment_id + ',' + response[i].user_id + ")';  data-toggle='modal'; data-target='#editReviewModal'>Edit </button> </span>"+
                    "<span style='padding-left: 5px;'> <button id='deleteReview' type='button' onclick=' deleteComment(" + response[i].comment_id + ")'>Delete</button></span>"+
                  "</span>"+
              "</div>"+
            "</div>"+
        "</div><br>"
        

        }
        document.getElementById('commentSection').innerHTML=HTML;
    };
    request.send();
}

function getUserFavourites() {
    var response = "";

    var request = new XMLHttpRequest();
    let user_id = sessionStorage.getItem('user_id');
   

    request.open("GET", "/getUserFavourites/" + user_id, true);
    request.setRequestHeader("Content-Type", "application/json");

    request.onload = function () {
        response = JSON.parse(request.responseText);
        console.log(response);

        var HTML = ""
        for (let i = 0; i < response.length; i++){
            
            HTML += "<div class='col-sm-4'>"+
                    "<div class='card' style='margin:20px 0 20px 0;' >"+
                      "<a class='card-block stretched-link' ></a>"+
                      "<img class='card-img-top' src='"+ response[i].image+"' alt='Card image cap'>"+
                      "<div class='card-body'>"+
                        "<h5 class='card-title'>" +  response[i].title + "</h5>"+
                      
      
                        "<span class='badge badge-secondary float-right'>" + response[i].cuisine + "</span>"+
                        
                      "</div>"+
                      
                    "</div>"+ "<p hidden id='fav' favid='" + response[i].favourites_id +   "'></p>" + 
                    "<input class='button delete_bar' type='button' onClick= 'delete_favourites()' value='Delete from favourites'>"+
                  "</div>"
                  
                  
            
        }

        document.getElementById('favTable').innerHTML = HTML;
    };
    request.send();
}
function add_favourites() {
    var fav_object = new Object();

    fav_object.user_id = sessionStorage.getItem("user_id");
    fav_object.restaurant__id = sessionStorage.getItem("restaurant__id");
    
    var request = new XMLHttpRequest();
    request.open('POST', '/addNewFavourite/'+ fav_object.user_id + '/'+ fav_object.restaurant__id, true);
    request.setRequestHeader("Content-type", "application/json");
    request.onload = function() {
        response = JSON.parse(request.responseText);

        if (response.affectedRows === 1) {
            alert('Added to favorites!');
           
        }

        else {
            alert('Unable to add to favorites, try again!')

        }
    }
    request.send(JSON.stringify(fav_object));
  }

  function deleteAccount() {
        var response = confirm("Are you sure you want to delete this account? This is irreversible.");
        if (response === true && localStorage.length>0) {
            deleteAllFavourites ()
            deleteAllComments()
            var request = new XMLHttpRequest();
            var url = `/deleteUser/${sessionStorage.getItem("user_id")}`;
            request.open("DELETE", url, true);
            request.setRequestHeader("Content-type", "application/json");
            request.onload = function() {
                alert("Your account has been deleted");
                localStorage.clear();
                sessionStorage.clear();
                window.location.href = 'index.html';
            }
            request.send();
        } 
        else {
            alert('Unable to delete account!')
        }
}
function deleteAllFavourites (){
    var fav_object = new Object();
    fav_object.user_id = sessionStorage.getItem("user_id");
    var request = new XMLHttpRequest();
        request.open('DELETE', '/deleteAllFavourites/' + fav_object.user_id, true);
        request.setRequestHeader("Content-type", "application/json");
        request.onload = function() {
            location.reload();
        }
        request.send(JSON.stringify(fav_object));
    }


function deleteAllComments(){
    var fav_object = new Object();
    fav_object.user_id = sessionStorage.getItem("user_id");
    var request = new XMLHttpRequest();
        request.open('DELETE', '/deleteAllComments/' + fav_object.user_id, true);
        request.setRequestHeader("Content-type", "application/json");
        request.onload = function() {
            location.reload();
        }
        request.send(JSON.stringify(fav_object));
    }

    function addComment() {
        var response = "";
        var review = new Object();
        review.rating = document.getElementById("rating2").value;
        console.log(review.rating)
        review.review = document.getElementById("userReview").value;
        console.log(review.review)
        review.restaurant__id = sessionStorage.getItem("restaurant__id")
        console.log(review.restaurant__id)
        review.restaurant= sessionStorage.getItem("title")
        console.log(review.restaurant)
        review.user_id = sessionStorage.getItem("user_id")
        console.log(review.user_id)
        review.username = sessionStorage.getItem("username")
        console.log(review.username)

       
        var request = new XMLHttpRequest();
    
        request.open("POST", "/addComment", true);
        request.setRequestHeader("Content-Type", "application/json");
    
        request.onload = function () {
            response = JSON.parse(request.responseText);
    
            if (response.affectedRows === 1) {
                alert('Succesfully added review!');
                fetchComments()
            }
    
            else {
                alert('Unable to add review,Please try again!')
    
            }
        };
    
        request.send(JSON.stringify(review));
    }

    function averageRating() {
        var response = "";
        var request = new XMLHttpRequest();
        var urlParams = new URLSearchParams(window.location.search);
        var restaurant__id = urlParams.get("restaurant__id");
   
    
        request.open("GET", "/getRestaurantRating/" + restaurant__id, true);
        request.setRequestHeader("Content-Type", "application/json");
    
        request.onload = function () {   
            response = JSON.parse(request.responseText);
            console.log(response);
            var HTML = ""
            for (let i = 0; i < response.length; i++) {
                HTML += "<h4 class='col-sm-4'> Average Restaurant Rating: " + response[i].average_rating + "</h4>"
                     
                    
        
    
    
            };
            document.getElementById('rating').innerHTML = HTML
           
        };
    
        request.send(JSON.stringify(response));
    }

    function editComment() {
        var comment = new Object();
        comment.rating = document.getElementById("rating1").value;
        console.log (comment.rating)
        comment.review = document.getElementById("userReview1").value;
        console.log (comment.review)
        comment.restaurant__id = sessionStorage.getItem("restaurant__id")
        console.log (comment.restaurant__id)
        comment.restaurant= sessionStorage.getItem("title")
        console.log (comment.restaurant)
        comment.user_id = sessionStorage.getItem("user_id")
        console.log (comment.user_id)
        comment.username = sessionStorage.getItem("username")
        console.log (comment.username)
        var response = confirm("Are you sure you want to edit your comment?");
        if (response === true) {
            console.log (sessionStorage.getItem('edituser_id'))
            console.log(sessionStorage.getItem('user_id') )
            console.log(localStorage.length)
        if (sessionStorage.getItem('edituser_id') == sessionStorage.getItem('user_id') && localStorage.length>0){
            var request = new XMLHttpRequest();
            var url = `/updateComment/${sessionStorage.getItem("comment_id")}`;
            console.log(url)
            request.open("PUT", url, true);
            request.setRequestHeader("Content-type", "application/json");
            request.onload = function() {
                response = JSON.parse(request.responseText);
                console.log(response);
                alert("Your review has been updated!");
                fetchComments()
            }
            request.send(JSON.stringify(comment));
            }
        else if (sessionStorage.getItem('edituser_id') != sessionStorage.getItem('user_id'))  {
            alert('You can only edit your own reviews! If this review is yours, login and try again!')
        }
        } 
    
        
    }
function savingCommentPosition(comment_id, user_id){
console.log(comment_id)
sessionStorage.setItem('comment_id', comment_id)
console.log(user_id)
sessionStorage.setItem('edituser_id',user_id)

}

// function getOneReview(){
//     var response = "";
//     var request = new XMLHttpRequest();

//     var urlParams = new URLSearchParams(window.location.search);
//     var review_id = urlParams.get('review_id');

//     request.open("GET", "/displayOneReview/" + review_id, true);
//     request.setRequestHeader("Content-Type", "application/json");
    

//     request.onload = function () {
//         sessionStorage.setItem('review_id', review_id)
//         response = JSON.parse(request.responseText);

//         document.getElementById("rating1").value = response[0].rating;
//         document.getElementById("userReview1").value = response[0].review;
//         console.log(response)
        

//     };
//     request.send();
// }

function deleteComment(comment_id) {
    console.log(comment_id)
    sessionStorage.setItem('comment_id', comment_id)
    var response = confirm("Are you sure you want to delete this review? This is irreversible.");
    if (response === true) {
    if (sessionStorage.getItem('edituser_id') == sessionStorage.getItem('user_id') && localStorage.length>0){
        var request = new XMLHttpRequest();
        var url = `/deleteComment/${sessionStorage.getItem("comment_id")}`;
        request.open("DELETE", url, true);
        request.setRequestHeader("Content-type", "application/json");
        request.onload = function() { 
            alert("Your review has been deleted!");
            fetchComments()
        }
        request.send();
        }
    else if (sessionStorage.getItem('edituser_id') != sessionStorage.getItem('user_id'))  {
        alert('You can only delete you own reviews! If this review is yours, login and try again!')
    }
    } 
}
function delete_favourites() {
    var response = confirm("Are you sure you want to delete this item from your favourites? This is irreversible.");
    let favid = document.getElementById("fav").getAttribute("favid");
   
    if (response === true) {
        var request = new XMLHttpRequest();
        var url = `/deleteFavourite/` + favid;
        request.open("DELETE", url, true);
        request.setRequestHeader("Content-type", "application/json");
        request.onload = function() {
            alert("This item has been deleted from favourites!");
        }
        request.send();
    } 
}
   
function eraseText() {
    document.getElementById("userReview1").value = "";
}

function checkLogin2() {
    if (localStorage.getItem("user_id") != null && localStorage.getItem("user_id") != "")
    {
        document.getElementById('profile').innerHTML='<span class="glyphicon glyphicon-heart"></span> Profile';
    }
    else
    {
    
       document.getElementById('btn_favourite').style.display='none'
       document.getElementById('btn_delete').style.display='none'
      
      
       
      
      
    }
}
function viewSortedProducts() {
	var request = new XMLHttpRequest();
	var select_cuisine = document.getElementById("select_cuisine").value;
	
	console.log(select_cuisine)
	
	request.open("GET", "/" + select_cuisine, true);
	request.setRequestHeader("Content-Type", "application/json");
	
	request.onload = function() {
		response = JSON.parse(request.responseText);
		HTML = "";
        for (let i = 0; i < response.length; i++) {

            HTML += '<div class="col-sm-4">' +
                '<!-- Restaurant Card Template -->' +
                '<div style="float: none; margin: 0 auto;">' +
                '<div class="card" style="margin:20px 0 20px 0;">' +
                '<a class="card-block stretched-link" href="restaurant_info.html?restaurant__id=' + response[i].restaurant__id + '"></a>' +
                '<img class="card-img-top" src="' + response[i].image + '" alt="Card image cap">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + response[i].title + '</h5>' +
                '<span> 5 <i class="fa fa-star" style="color:#EF4C00;"></i></span>' +

                '<span class="badge badge-secondary float-right" style="background-color: gray;">' + response[i].cuisine + '</span>' +

                '</div>' +
                '</div>' +
                '</div>' +

                '</div>' +
                '</div>'
        }
        document.getElementById('restaurantList').innerHTML = HTML
		
        
    };
	
	request.send();
}
function viewSortedProducts1() {
	var request = new XMLHttpRequest();
	var select_region = document.getElementById("select_region").value;
	
	console.log(select_region)
	
	request.open("GET", "/" + select_region, true);
	request.setRequestHeader("Content-Type", "application/json");
	
	request.onload = function() {
		response = JSON.parse(request.responseText);
		HTML = "";
        for (let i = 0; i < response.length; i++) {

            HTML += '<div class="col-sm-4">' +
                '<!-- Restaurant Card Template -->' +
                '<div style="float: none; margin: 0 auto;">' +
                '<div class="card" style="margin:20px 0 20px 0;">' +
                '<a class="card-block stretched-link" href="restaurant_info.html?restaurant__id=' + response[i].restaurant__id + '"></a>' +
                '<img class="card-img-top" src="' + response[i].image + '" alt="Card image cap">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + response[i].title + '</h5>' +
                '<span> 5 <i class="fa fa-star" style="color:#EF4C00;"></i></span>' +

                '<span class="badge badge-secondary float-right" style="background-color: gray;">' + response[i].cuisine + '</span>' +

                '</div>' +
                '</div>' +
                '</div>' +

                '</div>' +
                '</div>'
        }
        document.getElementById('restaurantList').innerHTML = HTML
		
        
    };
	
	request.send();
}

function searchBar() {
	var request = new XMLHttpRequest();
	var text_search = document.getElementById("text_search").value;//
	console.log(text_search)
	
	request.open("GET", "/SearchBar/" + text_search , true);
	request.setRequestHeader("Content-Type", "application/json");
	
	request.onload = function() {
		response = JSON.parse(request.responseText);
		HTML = "";
        for (let i = 0; i < response.length; i++) {

            HTML += '<div class="col-sm-4">' +
                '<!-- Restaurant Card Template -->' +
                '<div style="float: none; margin: 0 auto;">' +
                '<div class="card" style="margin:20px 0 20px 0;">' +
                '<a class="card-block stretched-link" href="restaurant_info.html?restaurant__id=' + response[i].restaurant__id + '"></a>' +
                '<img class="card-img-top" src="' + response[i].image + '" alt="Card image cap">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + response[i].title + '</h5>' +
                '<span> 5 <i class="fa fa-star" style="color:#EF4C00;"></i></span>' +

                '<span class="badge badge-secondary float-right" style="background-color: gray;">' + response[i].cuisine + '</span>' +

                '</div>' +
                '</div>' +
                '</div>' +

                '</div>' +
                '</div>'
        }
        document.getElementById('restaurantList').innerHTML = HTML
		
        
    };
	
	request.send();
}







  
  

  




  
















