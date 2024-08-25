import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { IPost } from '../../models/IPost'
import { IUser } from '../../models/IUser';
import axios from 'axios';
import Comments from '../comments/Comments';


function Post(props: IPost) {

  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users/' + props?.id, {});
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);




  return (
    <div className='card-body container-fluid p-0 my-2 bg-dark rounded-5'>
      <div className='container-fluid p-4 bg-light-subtle rounded-5'>
        <h4 className='card-title py-1 fw-bold'> {user ? user.name : "John Doe"}</h4>
        <h5 className='py-1'> Topic: {props.category ? props.category : "Other"} </h5>
        <p className="card-text fs-5 py-1"> {props.description}</p>
        <p className="card-text fs-6">
          <small className="text-body-secondary">Posted on: {props.createdAt.toString()}
            <br />
            {props.updatedAt.toString() === props.createdAt.toString() ? ''
              : 'Last Edited: ' + props.updatedAt.toString()
            }
          </small>
        </p>
        {/* <Link className="fs-5 my-3 border border-secondary border-2 rounded-pill  icon-link text-decoration-none text-secondary" to={{ pathname: `/post/${props.id}` }}>Comments</Link> */}

      </div><Comments postId={props.id} />
    </div>
  )
}

export default Post