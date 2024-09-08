import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react'

export const Login = () => {

  const API_URL = 'http://localhost:8080/api/auth/';

  const [storedEmail, setStoredEmail] = useState<string>("");
  const [storedPassword, setStoredPassword] = useState<string>("");

  let changeEmail = (e: SyntheticEvent) => {
    setStoredEmail((e.target as HTMLInputElement).value)
}

let changePassword = (e: SyntheticEvent) => {
  setStoredPassword((e.target as HTMLInputElement).value)
}

  const login = async() => {

    return axios
      .post(API_URL + 'login', {
        storedEmail,
        storedPassword,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        // uncomment if needed for testing purposes
        // localStorage.setItem('user', JSON.stringify(response.data));
        return response.data;
      });
  };


  return (
    <div className='position-absolute top-50 start-50 translate-middle'>

      <form className='container p-4 bg-light-subtle rounded-5 mx-5 col-sm-4' style={{width: '22rem'}} aria-label='Login Form'>
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
              <br />Dont have account?
              <a className="icon-link pt-3 ps-1" href="/register">Register</a>
            </p>
          </div>
        </div>

      </form>

    </div>
  )
}
