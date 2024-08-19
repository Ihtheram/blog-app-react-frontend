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

    <nav className="App-nav">
        <ul className="nav-list">
            <li><Link to="/"><img className='App-logo' alt="" /></Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/people">People</Link></li>
            
            
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        </ul>
    </nav>
    )
}

export default Nav