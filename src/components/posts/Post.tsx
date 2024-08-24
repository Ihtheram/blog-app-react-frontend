import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { IPost } from '../../models/IPost'
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
            <div className='container pb-5'>
                <h4 className='py-1 fw-bold'> {user? user.name: "John Doe"}</h4>
                <h5 className='py-1'> Topic: {props.category? props.category : "Other"} </h5>
                <p className="fs-5 py-1"> {props.description}</p>
                <p className="fs-6">Posted on: {props.createdAt.toString()}</p>
                {props.updatedAt.toString() === props.createdAt.toString() ? '' : '<p className="fs-6"> Last Edited:'+ props.updatedAt.toString()+'</p>'}
                <Link className="fs-5 my-3 border border-secondary border-2 rounded-pill  icon-link text-decoration-none text-secondary" to={{ pathname: `/post/${props.id}` }}>Comments</Link>
            </div>
        </>
    )
}

export default Post