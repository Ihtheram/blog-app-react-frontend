import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { IUser } from '../../models/IUser'
import User from './User';

function Users() {

  enum Role {
    writer = "Writer",
    admin = "Admin",
  }

  const example: IUser[] = [
    {
      id: 1,
      name: "Alice Johnson",
      email: "alice.johnson@email.com",
      institute: "Tech University",
      address: "123 Main St, Springfield, IL",
      role: Role.writer,
      createdAt: new Date("2023-01-15T08:00:00Z"),
      updatedAt: new Date("2023-06-20T10:00:00Z"),
    },
    {
      id: 2,
      name: "Bob Smith",
      email: "bob.smith@email.com",
      institute: "Innovation Institute",
      address: "456 Elm St, Metropolis, NY",
      role: Role.admin,
      createdAt: new Date("2022-11-05T09:30:00Z"),
      updatedAt: new Date("2023-07-18T14:45:00Z"),
    },
    {
      id: 3,
      name: "Carol White",
      email: "carol.white@email.com",
      institute: "Future Academy",
      address: "789 Oak St, Gotham, NJ",
      role: Role.writer,
      createdAt: new Date("2023-03-22T11:15:00Z"),
      updatedAt: new Date("2023-08-01T16:30:00Z"),
    },
  ];



  const navigate = useNavigate();

  const [users, setUsers] = useState<IUser[] | null>(example)


  useEffect(() => {
    axios.get('http://localhost:8080/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
        // navigate('/login');
      });
  }, []);


  let navigateToRegistrationForm = () => {
    navigate('/register');
  }


  return (
    <div className='container-fluid'>
      {/* <button onClick={navigateToRegistrationForm} className='new-user-button'>Sign up</button> */}
      <div className='container-fluid'>
        {users == null ?  <h4 className='text-center fw-normal text-body-secondary m-4'>Unfortunately, cannot show users!</h4>
          : users.map((user) => {
            return <User {...user} key={"user-icon-" + user.id} />
          })}
      </div>
    </div>
  )
}

export default Users