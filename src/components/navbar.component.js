import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

export default class Navbar extends Component {

  render() {
    return (
        <div >
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg" style={{
            display: 'flex',
            justifyContent: 'Right',
            alignItems: 'Right',
            padding:'10px 10px 10px 50px',
            borderRadius:'10px'
            
          }}>
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
      </div>
    );
  }
}
