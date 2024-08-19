import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { IPost } from '../../models/IPost'
import Post from './Post';

function Posts() {

  const posts1 : IPost[] = [
    {
      id: 1,
      userId: 101,
      category: 0,
      description: "Exploring the human mind and behavior.",
      approval: true,
      createdAt: new Date("2024-08-18T09:31:43Z"),
      updatedAt: new Date("2024-08-18T09:31:43Z"),
    },
    {
      id: 2,
      userId: 102,
      category: 2,
      description: "Latest scientific discoveries and research.",
      approval: true,
      createdAt: new Date("2024-08-18T09:31:43Z"),
      updatedAt: new Date("2024-08-18T09:31:43Z"),
    },
    // Add more posts as needed...
  ];
  

  const navigate = useNavigate();

  const [posts, setPosts] = useState<IPost[]|null>(null)


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
        {posts == null? "No posts yet"
        : posts.map((post) => {
          return <Post {...post} key={"post-icon-"+post.id}/>
        })}
      </div>
    </div>
  )
}

export default Posts