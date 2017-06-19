function save(item) {
	var reviewArray = getStoreArray("reviews");
	reviewArray.unshift(item);
	localStorage.setItem("reviews", JSON.stringify(reviewArray)); 
}

function loadReviews() {
	var reviewArray = getSavedReviews();
	var ul = document.getElementById("reviews");
	if (reviewArray != null) {
		for (var i = 0; i < reviewArray.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = reviewArray[i] + "<br>";
                        var button = document.createElement("button");
                        var t = document.createTextNode("Delete");
                        button.appendChild(t);
                        li.appendChild(button);
			ul.appendChild(li);
		}
	}
}

function getSavedReviews() {
	return getStoreArray("reviews");
}

  

function getStoreArray(key) {
	var reviewArray = localStorage.getItem(key);
	if (reviewArray == null || reviewArray == "") {
		reviewArray = new Array();
	}
	else {
		reviewArray = JSON.parse(reviewArray);
	}
	return reviewArray;
}

/* deleted review functions */ 

function saveDeleted(item) {
      var deletedArray = getStoreArray("deleted");
      deletedArray.unshift(item);
      localStorage.setItem("deleted", JSON.stringify(deletedArray));
}

function loadDeleted() {
       var deletedArray = getSavedDeleted()
       var ul = document.getElementById("deleted");
       if (deleteArray != null) {
           for (var i = 0; i < deletedArray.length; i++) {
           var li = document.createElement("li");
	   li.innerHTML = deletedArray[i] + "<br>";
           ul.appendChild(li);
    }
}
}


function getDeletedStoreArray(key) {
	var deletedArray = localStorage.getItem(key);
	if (deletedArray == null || deletedArray == "") {
		deletedArray = new Array();
	}
	else {
		deletedArray = JSON.parse(deletedArray);
	}
	return deletedArray;
}
function getSavedDeleted() {
    return getDeletedStoreArray("deleted");
}   

/* response to reviews */ 


function saveResponse(item) {
	var responseArray = getResponseStoreArray("responses");
	responseArray.unshift(item);
	localStorage.setItem("responses", JSON.stringify(responseArray)); 
}

function loadResponses() {
	var responseArray = getSavedResponses();
	var ul = document.getElementById("responses");
	if (responseArray != null) {
		for (var i = 0; i < responseArray.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = responseArray[i] + "<br>";
                       	ul.appendChild(li);
		}
	}
}

function getSavedResponses() {
	return getResponseStoreArray("responses");
}

  

function getResponseStoreArray(key) {
	var responseArray = localStorage.getItem(key);
	if (responseArray == null || responseArray == "") {
		responseArray = new Array();
	}
	else {
		responseArray = JSON.parse(responseArray);
	}
	return responseArray;
}

