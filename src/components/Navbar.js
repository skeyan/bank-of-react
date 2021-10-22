import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
            <div className="container-fluid">
                <Link className="navbar-brand mb-0 h1" to="/">
                    Bank of React
                </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/userProfile">User Profile</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/debits">Debits</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/credits">Credits</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    );
  }
}

export default Navbar;