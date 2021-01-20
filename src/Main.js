import React, { Component } from "react";

import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import myGallery from "./Gallery";
import Formul from "./Formul";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Simple SPA - Salma Ben Salem</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/stuff">Stuff</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="/formul">Application</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/stuff" component={Stuff}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/gallery" component={myGallery}/>
                    <Route path="/formul" component={Formul}/>
                </div>
            </div>
            </HashRouter>
        );
    }
}
export default Main;