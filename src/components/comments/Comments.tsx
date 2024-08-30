import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { IComment } from '../../models/IComment';
import Comment from './Comment';
import { useCollapse } from 'react-collapsed';

function Comments(props:{postId:number}) {
  // const location = useLocation();
  // const postId = location.state?.postId;
  const postId = props.postId;


  const example: IComment[] = [
    {
      id: 1,
      postId: 1,
      commenterId: 1,
      description: "Psychology explores how people think, feel, and act. It delves into biological influences, social pressures, and environmental factors that shape behavior",
      parentCommentId: 1,
      createdAt: new Date("2024-08-18T09:31:43Z"),
      updatedAt: new Date("2024-08-18T09:31:43Z")
    },
    {
      id: 2,
      postId: 1,
      commenterId: 2,
      description: "Science involves unbiased observations and systematic experimentation. It seeks to uncover general truths and fundamental laws governing the natural world",
      parentCommentId: 1,
      createdAt: new Date("2024-08-18T09:31:43Z"),
      updatedAt: new Date("2024-09-18T09:31:43Z")
    },
    // Add more posts as needed...
  ];


  const [comments, setComments] = useState<IComment[] | null>(example)
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/comments/' + postId, {});
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, []);



  // className="fs-5 border border-secondary border-2 rounded-pill text-secondary icon-link text-decoration-none  my-3" 
  return (

    <div className="collapsible">
      <div className="header text-secondary fs-5 border border-secondary border-1 rounded-pill icon-link p-3 m-3 fs-6" {...getToggleProps()}>
        {isExpanded ? 'Collapse' : 'Expand'} Comments
      </div>
      <div {...getCollapseProps()}>

        <div className="content container p-1 m-1  border-2 rounded-5">
          <div className='card container-fluid p-2 border-0'>
          {comments && <h4 className='px-3'> Comments </h4>}
            {/* <button onClick={navigateToNewCommentForm} className='new-comment-button'>Create a New Comment!</button> */}
            <div className='container-fluid'>
              {comments == null ? <h4 className='text-center fw-normal text-body-secondary fs-6'>This post has no comments yet</h4>
                : comments.map((comment) => {
                  return <Comment {...comment} key={"comment-icon-" + comment.id} />
                })}
            </div>
          </div>
        </div>

      </div>
    </div>



  )
}

export default Comments






