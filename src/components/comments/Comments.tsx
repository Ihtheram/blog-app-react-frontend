import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { IComment } from '../../models/IComment';
import Comment from './Comment';

function Comments() {
  const location = useLocation();
  const postId = location.state?.postId;


  const examples : IComment[] = [
    {
      id: 1,
      postId: 1,
      commenterId: 1,
      description: "ajfehw wuie  h g k oa ef ae fjoie afjel",
      parentCommentId: 1,
      createdAt: new Date("2024-08-18T09:31:43Z"),
      updatedAt: new Date("2024-08-18T09:31:43Z")
    },
    {
      id: 2,
      postId: 1,
      commenterId: 2,
      description: "eio s w fewr oawefja  oeafl oa  ela",
      parentCommentId: 1,
      createdAt: new Date("2024-08-18T09:31:43Z"),
      updatedAt: new Date("2024-08-18T09:31:43Z")
    },
    // Add more posts as needed...
  ];


  const [comments, setComments] = useState<IComment[]|null>(examples)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/comments/'+ postId, {});
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
  }, []);




  return (
    <div>
      <h2> Comments </h2>
      <div className='posts-container'>
      {/* <button onClick={navigateToNewCommentForm} className='new-comment-button'>Create a New Comment!</button> */}
      <div className='posts-flexbox'>
        { comments == null? "No comments yet"
          : comments.map((comment) => {
          return <Comment {...comment} key={"comment-icon-"+comment.id}/>
        })}
      </div>
    </div>

    </div>
  )
}

export default Comments






