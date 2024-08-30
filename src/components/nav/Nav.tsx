import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Nav() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    return (

    // <nav className='App-nav'>
    //     <a href="">
    //   <img className='App-logo' alt="" />
    // </a>
    // <a>Posts</a>
    // <a>People</a>
    // </nav>


    <nav className="container-fluid navbar navbar-expand-sm p-1 sticky-top bg-navbar d-flex justify-content-between">
    
    <Link className="App-logo" to="/"></Link>
        
        <div>
        <ul className="navbar-nav">
            <li className="nav-item px-1"><Link className="nav-link" to="/posts">Posts</Link></li>
            <li className="nav-item px-1"><Link className="nav-link" to="/people">People</Link></li>
        </ul>
        </div>
        
        <div>
        <ul className="navbar-nav">
            <li className="nav-item px-1"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item px-1"><Link className="nav-link" to="/register">Register</Link></li>
            </ul>
            </div>
        
        
    </nav>
    )
}

export default Nav