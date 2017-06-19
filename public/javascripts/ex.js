window.onload = init;

function init() {
  var latLong;
    var button = document.getElementById("postButton");
  button.onclick = handleSubmitClick;
  var button = document.getElementById("deleteAll");
  button.onclick = handleDeleteClick;
  loadReviews();
  loadResponses();
}


function handleSubmitClick(e) {
  var textInput = document.getElementById("aReview");
  var review = textInput.value;
  if (review == "") {
    alert("Please enter a review");
  } 
  else if(document.getElementById("guest").checked){
    var titleInput = document.getElementById("title");
    var title = titleInput.value;
    
    var ratingInput = document.getElementById("rating");
    var rating = ratingInput.value;
    var li = document.createElement("li");
    var name1 = document.getElementById("name1"); 
    var fname = name1.value;
    var map =document.getElementById("map_pic").src; 
       
      

      
      
    review = "<b>" + title + "</b>   -    " + rating + "/5" + "<br>" + "<em>"+ fname + "</em>" + "<br> <br>" + review +"<img id='map_pic''  src='"+map+"'><br>" ;
    li.innerHTML = review  ;

    var button = document.createElement("button");
    var t = document.createTextNode("Delete");
    button.appendChild(t);
    li.appendChild(button);   
    
    var ul = document.getElementById("reviews");
    ul.appendChild(li);
    ul.insertBefore(li, ul.childNodes[0]);

    save(review);
   }
   else {
      var li = document.createElement("li");

      review = "Manager Response:" + "<br>" + review;
      li.innerHTML = review + "<br>";
      var ul = document.getElementById("responses");
      ul.appendChild(li);
      ul.insertBefore(li, ul.childNodes[0]);
      saveResponse(review);
   }
}

function handleDeleteClick(e) {
   localStorage.clear();
}

    var myLocation;
    var doc=document.getElementById("map");
    function getLocation()
    {
        if (navigator.geolocation)
        {
        navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

    function showPosition(position)
    {
        var latlon=position.coords.latitude+","+position.coords.longitude;
        
      myLocation=latlon;       

        var  img_url="http://maps.googleapis.com/maps/api/staticmap?center="+myLocation+"&markers=icon:http://tinyurl.com/2ftvtt6|"+myLocation+"&zoom=14&size=200x150&markers=color:blue";
        document.getElementById("map").innerHTML="<img id='map_pic''  src='"+img_url+"'>";
        
    }
