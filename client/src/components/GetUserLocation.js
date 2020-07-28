import React, { Component } from "react";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZW1naHJpYiIsImEiOiJja2QxZm80c3IxMzF1MnFwdjRseDdvNjU2In0.ZSddxPpro55FQNYk7HU6lQ';

class GetUserLocation extends React.Component {
    // Code from the next few steps will go here
    constructor(props) {
        super(props);
        this.state = {
            lng: 5,
            lat: 7,
            zoom: 3
        };
        
    }

    

    componentDidMount() {
        /* navigator.geolocation.getCurrentPosition(
            function (position) {
                const lg = position.coords.longitude
                console.log(lg);
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            }
        ); */

        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            var crd = pos.coords;

            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);
        }

        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
        
    
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });


        const marker = new mapboxgl.Marker()
            .setLngLat([this.state.lng, this.state.lat])
            .addTo(map); // add the marker to the map
        }
    
    render() {
        return (
            <div>
                <div ref={el => this.mapContainer = el} style={{
                    position: "absolute",
                    top: 90,
                    right: 0,
                    left: 0,
                    bottom: 0}}/>
            </div>
        )
    }
}

export default GetUserLocation