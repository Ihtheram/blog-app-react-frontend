import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';

function Nav() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    return (

        <nav>

            <div>
                <ul className="navbar-nav">
                    <li className="nav-item px-1"><Link className="nav-link" to="/posts">Posts</Link></li>
                    <li className="nav-item px-1"><Link className="nav-link" to="/people">People</Link></li>

                    {localStorage.getItem('user') == null ?
                        <>
                            <li className="nav-item px-1"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item px-1"><Link className="nav-link" to="/register">Register</Link></li>
                        </>
                        : <li className="nav-item px-1"><Link className="nav-link" to="/logout">Logout</Link></li>
                    }
                </ul>
            </div>


        </nav>
    )
}

export default Nav