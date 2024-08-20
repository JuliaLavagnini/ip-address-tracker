var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var iconLocation = L.icon({
    iconUrl: 'assets/media/icon-location.svg',
    iconSize:     [46, 56], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
});

L.marker([51.5, -0.09], {icon: iconLocation}).addTo(map);