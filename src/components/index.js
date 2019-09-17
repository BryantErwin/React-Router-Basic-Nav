import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navigation from './Navigation';
import {BrowserRouter as Router} from "react-router-dom";
import App from "../App";
import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css'

ReactDOM.render(
    <Router>
        <App/>
    </Router>
);

export { Home, About, Contact, Navigation };
