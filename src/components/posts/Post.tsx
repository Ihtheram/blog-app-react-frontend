import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IPost } from '../../models/IPost'
import './PostItem.css'
import { IUser } from '../../models/IUser';
import axios from 'axios';


function Post(props: IPost) {

    const [post, setPost] = useState<IPost>(props);
    const [user, setUser] = useState<IUser|null>(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/users/'+ user?.id, {});
            setUser(response.data);
    
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <>
            <div >
                <h4>{user?.name}</h4>
                <p> {post.category}</p>
                <p>{post.description}</p>
                <p>Posted on: {post.createdAt.toString()}</p>
                <p>Last Updated: {post.updatedAt.toString()}</p>
            </div>
        </>
    )
}

export default Post