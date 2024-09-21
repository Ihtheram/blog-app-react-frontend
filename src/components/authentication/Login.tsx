import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react'
import { IUser } from '../../models/IUser';

export const Login = () => {

  const login_endpoint = 'http://localhost:8080/api/auth/login';

  const [storedEmail, setStoredEmail] = useState<string>("");
  const [storedPassword, setStoredPassword] = useState<string>("");

  enum Role {
    writer = "Writer",
    admin = "Admin",
  }
  const example: IUser =
  {
    id: 1,
    name: "John Doe",
    email: "john-doe@email.com",
    institute: "Tech University",
    address: "123 Main St, Springfield, IL",
    role: Role.writer,
    createdAt: new Date("2023-01-15T08:00:00Z"),
    updatedAt: new Date("2023-06-20T10:00:00Z"),
  }

  let changeEmail = (e: SyntheticEvent) => {
    setStoredEmail((e.target as HTMLInputElement).value)
  }

  let changePassword = (e: SyntheticEvent) => {
    setStoredPassword((e.target as HTMLInputElement).value)
  }

  const login = async () => {

    return axios.post(
      login_endpoint, {
        storedEmail,
        storedPassword,
      }
    ).then((response) => {
      if (response.data.length > 0 && response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
      } else {
        // uncomment if needed for testing purposes
        localStorage.setItem('user', JSON.stringify(example));
        return example;
      }
    });
  };


  return (
    <div className='position-absolute top-50 start-50 translate-middle'>

      <form className='container p-4 bg-light-subtle rounded-5 mx-5 col-sm-4 w-sm-100' style={{ width: '29rem' }} aria-label='Login Form'>
        <legend className='text-secondary my-3 pb-3'>Login to your account</legend>

        <div className="form-floating mb-3">
          <input id="floatingEmail" type="email" className="form-control rounded-pill" placeholder="name@example.com" value={storedEmail} onChange={changeEmail} />
          <label htmlFor="floatingInput" className='fs-6'>Email address</label>
        </div>
        <div className="form-floating">
          <input id='floatingPassword' type="password" className='form-control rounded-pill' placeholder="Password" value={storedPassword} onChange={changePassword} />
          <label htmlFor="floatingPassword" className='fs-6'>Password</label>
        </div>

        <div className='d-flex justify-content-between my-3 text-end'>

          <div><button className="btn icon-link fs-5 border border-secondary border-2 rounded-pill px-3 py-2 my-3 button-submit" onClick={login}>LOGIN</button></div>
          <div>
            <p className='fs-6'>
              <a className='py-3' href="/submit-email">Forgot password?</a>
              <br />Need an account?
              <a className="icon-link pt-3 ps-1" href="/register">Register</a>
            </p>
          </div>
        </div>

      </form>

    </div>
  )
}
