import React, { useEffect, useState } from 'react'

import { IUser } from '../../models/IUser';
import axios from 'axios';
import { IComment } from '../../models/IComment';


function Comment(props: IComment) {

    const [user, setUser] = useState<IUser|null>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:8080/users/'+ props?.id, {});
            setUser(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
        
      }, []);


      

    return (
        <>
            <div className='card-body container-fluid p-4 bg-comment rounded-5 my-3'>
                <h6 className='card-title py-1 fs-5 fw-bold'> {user? user.name: "John Doe"}</h6>
                <p className="card-text  fs-6 py-1">{props.description}</p>
                <p className="card-text fs-6">
                <small className="text-body-secondary">Posted on: {props.createdAt.toString()} {props.updatedAt.toString() === props.createdAt.toString() ? '' : ' [Edited]'}
                  </small>
                </p>
                
            </div>
        </>
    )
}

export default Comment