import React, { Component } from "react";
import Map from "./Map";

const location = {
    address: 'Tunis, Tunisia',
    lat: 33.892166,
    lng: 9.561555499999997,
}

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <h2>GOT QUESTIONS?</h2>
                <p>
                    The easiest thing to do is post on our 
                    <a href="http://forum.kirupa.com">forums</a>.
                </p>
                <Map location={location} zoomLevel={17}/>
            </div>
        );
    }
}

export default Contact;