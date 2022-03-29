var map;



function initMap() {
    // map options
    var mapOptions = {
        zoom: 14,
        center: { lat: 47.5, lng: 19.06 },
    };

    // creating new map
    map = new google.maps.Map(document.getElementById("map"), mapOptions);

    markers.forEach(marker => {
        addMarkerFromAddr(marker);
    });
}

function addMarkerFromAddr(args) {
    if (args.address == "")
        return;
    const request = {
        query: args.address,
        fields: ["name", "geometry"],
    };
    service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
        console.log(status + ":");
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            console.log(results[0].name);
            addMarker({
                coords: results[0].geometry.location,
                content: args.content,
                url: args.url,
                address: args.address,
            });
        }
    });
}

var infoWindows = [];

function addMarker(args) {
    // marker options
    var markerOptions = {
        position: args.coords,
        map: map,
    };
    // adding new marker
    var marker = new google.maps.Marker(markerOptions);

    // info window options
    var infoWindowOptions = {
        content: args.content + "<a target='_blank' href='" + args.url + "'>Több infó</a>" + "<p>Cím:<br>" + args.address + "</p>",
    };

    // adding info window
    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    infoWindows.push(infoWindow);
    // click shows info window
    marker.addListener("click", function () {
        infoWindows.forEach(infoWindow => {
            infoWindow.close();
        });
        infoWindow.open(map, marker);
    });
};