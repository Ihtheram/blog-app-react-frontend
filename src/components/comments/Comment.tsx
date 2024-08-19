import React, { useEffect, useState } from 'react'

import { IUser } from '../../models/IUser';
import axios from 'axios';
import { IComment } from '../../models/IComment';


function Comment(props: IComment) {

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
                <h4>{props.commenterId}</h4>
                <p>{props.description}</p>
                <p>Posted on: {props.createdAt.toString()}</p>
                <p>Last Updated: {props.updatedAt.toString()}</p>
            </div>
        </>
    )
}

export default Comment