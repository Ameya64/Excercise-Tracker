import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">Exercise Tracker</Link>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/" className="nav-link">Exercises</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/create" className="nav-link">Create Exercise Log</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/user" className="nav-link">Create User</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}