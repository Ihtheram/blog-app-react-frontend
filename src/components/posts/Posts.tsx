import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { IPost } from '../../models/IPost'
import Post from './Post';

function Posts() {

  const navigate = useNavigate();

  const [posts, setPosts] = useState<IPost[]>([])


  useEffect(() => {
    axios.get('http://localhost:8080/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate('/login');
      });
  }, []);


  let navigateToNewPostForm = () => {
    navigate('/new-post');
  }
  

  return (
    <div className='posts-container'>
      {/* <button onClick={navigateToNewPostForm} className='new-post-button'>Create a New Post!</button> */}
      <div className='posts-flexbox'>
        {posts.map((post) => {
          return <Post {...post} key={"post-icon-"+post.id}/>
        })}
      </div>
    </div>
  )
}

export default Posts