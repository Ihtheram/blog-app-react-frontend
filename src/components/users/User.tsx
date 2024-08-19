import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IUser } from '../../models/IUser'


function User(props: IUser) {

    const [user, setUser] = useState<any>(props);

    useEffect(() => {


        let asyncCall = async () => {
            // Fetch may still need header fields
            let res = await fetch('http://localhost:8080/users/' + props, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then((data) => data.json())
            .then((data) => setUser(data))
            .catch((error) => {
                alert("There was an error loading vehicle information")
                console.log(error)
            })
        }

        if (typeof props === 'number') {
            asyncCall()
        } else {
            setUser(props)
        }
    
    }, [])

    return (
        <>
            <div >
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>Institute: {user.institute}</p>
                <p>Location: {user.address}</p>
                <p>User Type: {user.role}</p>
                <p>Member since {user.createdAt}</p>
            </div>
        </>
    )
}

export default User