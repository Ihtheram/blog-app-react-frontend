import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IPost } from '../../models/IPost'
import './PostItem.css'
import { IUser } from '../../models/IUser';


function Post(props: IPost) {

    const [post, setPost] = useState<IPost>(props);
    const [user, setUser] = useState<IUser>({
        id: 0,
        name: '',
        email: '',
        institute: '',
        address: '',
        role: 0,
        createdAt: new Date(),
        updatedAt: new Date()
    });


    useEffect(() => {

        let asyncCall = async () => {
            // Fetch may still need header fields
            let res = await fetch('http://localhost:8080/posts' + props, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then((data) => data.json())
            .then((data) => setPost(data))
            .catch((error) => {
                alert("There was an error loading vehicle information")
                console.log(error)
            })
        }
        setPost(props)    
    }, [])

    return (
        <>
            <div >
                <h2>{post.userId}</h2>
                <p> {post.category}</p>
                <p>{post.description}</p>
                <p>Posted on: {post.createdAt}</p>
                <p>Last Updated: {post.updatedAt}</p>
            </div>
        </>
    )
}

export default Post