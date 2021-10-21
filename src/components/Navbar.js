import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Bank of React</Link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/login">Login</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/userProfile">User Profile</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/debits">Debits</Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/credits">Credits</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
  }
}

export default Navbar;