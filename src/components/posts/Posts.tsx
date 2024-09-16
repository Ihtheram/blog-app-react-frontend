import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { IPost } from '../../models/IPost'
import Post from './Post';
import { NotFound } from '../errors/NotFound';
import { NoContent } from '../errors/NoContent';

function Posts() {

  enum Category {
    Psychology = "Psychology",
    Social = "Social",
    Science = "Science",
    Fitness = "Fitness",
    Religion = "Religion",
    Others = "Others"
  }

  const examples : IPost[] = [
    {
      id: 1,
      userId: 101,
      category: Category.Psychology,
      description: "Psychology is the scientific study of behavior and mental processes, a field that encompasses a diverse range of topics such as cognition, emotions, personality, interpersonal relationships, and mental health. This corpus provides an overview of the fundamental concepts, theories, and applications of psychology, highlighting its significance in understanding the human experience.",
      approval: true,
      createdAt: new Date("2024-08-18T09:31:43Z"),
      updatedAt: new Date("2024-08-18T09:31:43Z"),
    },
    {
      id: 2,
      userId: 102,
      category: Category.Science,
      description: "Science, the systematic pursuit of knowledge, has been humanity's guiding star through the dark cosmic sea of the unknown. From the vibrant hues of the solar spectrum to the minuscule interactions of subatomic particles, the manifold realms of science bind our understanding of existence. This corpus delves into the fundamental branches of science, the methodology of scientific inquiry, and the transcendent influence of scientific discoveries on society.",
      approval: true,
      createdAt: new Date("2024-08-18T09:31:43Z"),
      updatedAt: new Date("2024-09-18T09:31:43Z"),
    },
    {
      id: 3,
      userId: 102,
      category: Category.Science,
      description: "Science, the systematic pursuit of knowledge, has been humanity's guiding star through the dark cosmic sea of the unknown. From the vibrant hues of the solar spectrum to the minuscule interactions of subatomic particles, the manifold realms of science bind our understanding of existence. This corpus delves into the fundamental branches of science, the methodology of scientific inquiry, and the transcendent influence of scientific discoveries on society.",
      approval: true,
      createdAt: new Date("2024-08-18T09:31:43Z"),
      updatedAt: new Date("2024-09-18T09:31:43Z"),
    },
    {
      id: 4,
      userId: 102,
      category: Category.Science,
      description: "Science, the systematic pursuit of knowledge, has been humanity's guiding star through the dark cosmic sea of the unknown. From the vibrant hues of the solar spectrum to the minuscule interactions of subatomic particles, the manifold realms of science bind our understanding of existence. This corpus delves into the fundamental branches of science, the methodology of scientific inquiry, and the transcendent influence of scientific discoveries on society.",
      approval: true,
      createdAt: new Date("2024-08-18T09:31:43Z"),
      updatedAt: new Date("2024-09-18T09:31:43Z"),
    },
  ];
  

  const navigate = useNavigate();

  const [posts, setPosts] = useState<IPost[]|null>(examples)


  useEffect(() => {
    axios.get('http://localhost:8080/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        // navigate('/login');
      });
  }, []);


  let navigateToNewPostForm = () => {
    navigate('/new-post');
  }
  

  return (
    <div>

      <div className='card-body container-fluid bg-post rounded-5 mb-3'>

        <form className='container-fluid rounded-5 px-0' aria-label='Form'>
          <div className='d-flex justify-content-between text-end'>
            <textarea className="text-center bg-dark w-100 rounded-5 px-3 py-1" placeholder="Compose_" /*value={prose} onChange={changeProse}*/ />
            <button className="btn icon-link fs-5 border border-secondary border-2 rounded-pill px-3 py-2 m-2 button-submit h-25" /*onClick={post}*/>Post</button>        
          </div>
        </form>

      </div>

      <div>
      {/* <h1 className='text-center text-secondary-emphasis fw-normal'>POSTS</h1> */}
        {posts == null? <NoContent pageName={'page'} contentsName={'post'}  />
        : posts.map((post) => {
          return <Post {...post} key={"post-icon-"+post.id}/>
        })}
      </div>
    </div>
  )
}

export default Posts