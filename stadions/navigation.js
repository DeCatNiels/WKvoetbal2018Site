/*
var imported = document.createElement('script');
imported.src = 'stadions.js';
document.head.appendChild(imported);
*/

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

/*function myMap() {
    //var mapCanvas = document.
    var mapOptions = {
        center: new google.maps.LatLng(50.938241299999994, 5.347872),
        zoom:5,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(document.getElementById("googleMaps"), mapOptions);
}*/

function myMap() {
    var mapCanvas = document.getElementById("googleMaps");
    var myCenter = new google.maps.LatLng(stadions[0].lat, stadions[0].long);
    var mapOptions = {
        center: myCenter,
        zoom:5,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
        animation: google.maps.Animation.bounce
    });
    marker.setMap(map);
    addMarkers(map);
}

function addMarkers(map){
    for(var i =0 ; i < stadions.length; i++){
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(stadions[i].lat, stadions[i].long),
            animation: google.maps.Animation.bounce
        });
        marker.setMap(map);
    }
}
