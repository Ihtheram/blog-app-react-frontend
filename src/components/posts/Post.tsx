import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { IPost } from '../../models/IPost'
import './PostItem.css'
import { IUser } from '../../models/IUser';
import axios from 'axios';


function Post(props: IPost) {

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
                <p> {props.category}</p>
                <p>{props.description}</p>
                <p>Posted on: {props.createdAt.toString()}</p>
                <p>Last Updated: {props.updatedAt.toString()}</p>
                <Link to={`/post/${props.id}`}>Comments</Link>
            </div>
        </>
    )
}

export default Post