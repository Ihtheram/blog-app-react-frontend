import axios from 'axios';
import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IComment } from '../../models/IComment';
import Comment from './Comment';
import { useCollapse } from 'react-collapsed';

function Comments(props: { postId: number }) {

  const comments_endpoint = 'http://localhost:8080/comments/';

  const postId = props.postId;
  const [opinion, setOpinion] = useState<string>("");

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


  const [comments, setComments] = useState<IComment[]>(example)
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const [isPointedUp, setIsPointedUp] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(comments_endpoint + postId, {});
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

  }, [postId]);

  const togglePointUp = () => {
    isPointedUp? setIsPointedUp(false) : setIsPointedUp(true);
  }

  const getSharingLink = () => {
    console.log("sharing Link");
  }

  let changeOpinion = (e: SyntheticEvent) => {
    setOpinion((e.target as HTMLInputElement).value)
  }

  const post = async () => {
    return axios
      .post(comments_endpoint, {
        opinion
      })
      .then(() => {
        setComments((comments) => [
          ...comments,
          {
            id: 5,
            postId: 10,
            commenterId: 4,
            description: opinion,
            parentCommentId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ]);
      });
  };

  const navigate = useNavigate();
  
  const authCheck = async () => {
    if (!localStorage.getItem('user')) {
      console.log("Not logged in!");
      navigate('/login');
    } 
  }

  return (
    <div className="collapsible">

      <div className= {'container-fluid d-flex justify-content-between fs-5' + isExpanded? 'sticky-top ' : ''}>
        <button className="button-basic px-3 p-2 m-3 justify-content-center border-0 bg-transparent" {...getToggleProps()}>
          {isExpanded ? <i className="bi bi-chat-left-text-fill"></i> : <i className="bi bi-chat-left-text "></i>}
        </button>
        <button className="button-basic px-3 p-2 m-3 justify-content-center border-0 bg-transparent" onClick={togglePointUp}>
          {isPointedUp ? <i className="bi bi-hand-index-thumb-fill"></i> : <i className="bi bi-hand-index-thumb"></i>}
        </button>
        <button className="button-basic px-3 p-2 m-3 justify-content-center border-0 bg-transparent" onClick={getSharingLink}>
          <i className="bi bi-share"></i>
        </button>
      </div>

      <div {...getCollapseProps()}>

        <div className="content  p-1 m-1  border-2 rounded-5">

          <div className='card container-fluid p-2 border-0 text-start'>

            {comments && <h4 className='px-3 mb-4'> Comments </h4>}

            <div className='container-fluid'>
              {/* Post a comment */}
              <form className='container-fluid bg-comment rounded-5 px-0 mb-4' aria-label='Form'>
                <div className='d-flex justify-content-between'>
                  <textarea className="bg-dark w-100 rounded-5 px-3 py-1" placeholder="Write your opinion..." value={opinion} onChange={changeOpinion} onClick={authCheck} />
                  <button className="button-basic fs-5 rounded-end-5 px-3" onClick={post}><i className="bi bi-send text-light"></i></button>
                </div>
              </form>
              {/* List of comments */}
              {comments == null ? <p className='text-center text-secondary'> This page has no comments yet</p>
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






