import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { IComment } from '../../models/IComment';
import Comment from './Comment';

function Comments() {
  const location = useLocation();
  const postId = location.state?.postId;

  const [comments, setComments] = useState<IComment[]|null>(null)

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






