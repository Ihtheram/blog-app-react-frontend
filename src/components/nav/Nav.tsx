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


    <nav className="navbar navbar-expand-sm pb-5">

        <Link className="App-logo" to="/"></Link>
        
        <div className="container-fluid px-5">
        <ul className="navbar-nav">
            <li className="nav-item px-1"><Link className="nav-link" to="/posts">Posts</Link></li>
            <li className="nav-item px-1"><Link className="nav-link" to="/people">People</Link></li>
            
            
            <li className="nav-item px-1"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item px-1"><Link className="nav-link" to="/register">Register</Link></li>
        </ul>
        </div>
    </nav>
    )
}

export default Nav