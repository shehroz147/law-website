import React from 'react';

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
export default function Mapp() {
mapboxgl.accessToken = 'pk.eyJ1IjoibmF2ZWVkLTEyIiwiYSI6ImNreXQ5Z250bzFiNDYycG8zcXB2OWlvbjcifQ.iE_-5eZnXuLGN9qwEukcng';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11'
});
map.addControl(new mapboxgl.NavigationControl());

  return (<div className="map" id="map" width = {420} height = {420}>            
        </div>
        
        )
        
}
