import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear user data from local storage or any other storage
        localStorage.removeItem('user');

        // Redirect to homepage
        navigate('/');
    }, [navigate]);

    return (
        <div className='position-absolute top-50 start-50 translate-middle'>
            <h2>Logging out...</h2>
        </div>
    );
}
