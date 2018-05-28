getLocation();
var position;

function showPosition(position) {
    this.position = position;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


function myMap() {
    //var mapCanvas = document.
    var mapOptions = {
        center: new google.maps.LatLng(50.938241299999994, 5.347872),
        zoom:16,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("googleMaps"), mapOptions);
}
