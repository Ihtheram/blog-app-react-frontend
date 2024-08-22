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


    <nav className="navbar navbar-expand-sm bg-dark">
        <div className="container-fluid">
        <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link text-white" to="/"><img className='App-logo' alt="" /></Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/posts">Posts</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/people">People</Link></li>
            
            
            <li className="nav-item"><Link className="nav-link text-white" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/register">Register</Link></li>
        </ul>
        </div>
    </nav>
    )
}

export default Nav