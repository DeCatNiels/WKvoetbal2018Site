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
    addMarkers(map);
}

function addMarkers(map){
    var image = {
        url: "../afbeeldingen/icon_stadion.png",
        scaledSize: new google.maps.Size(40,40)
    };
    for(var i =0 ; i < stadions.length; i++){
        let stadion = stadions[i];
        let marker = new google.maps.Marker({
            position: new google.maps.LatLng(stadion.lat, stadion.long),
            animation: google.maps.Animation.bounce,
            icon: image
        });
        marker.setMap(map);
        marker.addListener("click", function() {
            OpenDialog(stadion)
        });
    }
}

function OpenDialog(stadion){
    var dialog = document.getElementById("dialog");
    dialog.showModal();
    document.getElementById("title").innerText = stadion.name;
    document.getElementById("image").src = stadion.img;
    document.getElementById("locatie").innerText = stadion.city;
    document.getElementById("capaciteit").innerText = stadion.cap;
    document.getElementById("sluiten").addEventListener("click",function() {
        dialog.close();
    });

}
