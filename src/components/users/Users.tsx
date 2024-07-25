import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { IUser } from '../../models/IUser'
import User from './User';

function Users() {

  const navigate = useNavigate();

  const [users, setUsers] = useState<IUser[]>([])


  useEffect(() => {
    axios.get('http://localhost:8080/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
        navigate('/login');
      });
  }, []);


  let navigateToRegistrationForm = () => {
    navigate('/register');
  }
  



  return (
    <div className='users-container'>
      <button onClick={navigateToRegistrationForm} className='new-user-button'>Sign up</button>
      <div className='users-flexbox'>
        {users.map((user) => {
          return <User {...user} key={"post-icon-"+user.id}/>
        })}
      </div>
    </div>
  )
}

export default Users