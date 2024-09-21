import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react'

export const Register = () => {

  const register_endpoint = 'http://localhost:8080/api/auth/register';

  const [storedName, setStoredName] = useState<string>("");
  const [storedEmail, setStoredEmail] = useState<string>("");
  const [storedInstitute, setStoredInstitute] = useState<string>("");
  const [storedAddress, setStoredAddress] = useState<string>("");
  const [storedPassword, setStoredPassword] = useState<string>("");
  const [storedRetypedPassword, setStoredRetypedPassword] = useState<string>("");

  let changeName = (e: SyntheticEvent) => {
    setStoredName((e.target as HTMLInputElement).value);
  }

  let changeEmail = (e: SyntheticEvent) => {
    setStoredEmail((e.target as HTMLInputElement).value);
  }

  let changeInstitute = (e: SyntheticEvent) => {
    setStoredInstitute((e.target as HTMLInputElement).value);
  }

  let changeAddress = (e: SyntheticEvent) => {
    setStoredAddress((e.target as HTMLInputElement).value);
  }

  let changePassword = (e: SyntheticEvent) => {
    setStoredPassword((e.target as HTMLInputElement).value)
  }

  let changeRetypedPassword = (e: SyntheticEvent) => {
    setStoredRetypedPassword((e.target as HTMLInputElement).value)
  }

  const register = async () => {
    if (changePassword === changeRetypedPassword) {
      return axios.post(
        
        register_endpoint, {
          storedName,
          storedEmail,
          storedInstitute,
          storedAddress,
          storedPassword,
          storedRetypedPassword
        }
  )}};


  return (
    <div className='position-absolute top-50 start-50 translate-middle'>

      <form className='container p-4 my-4 bg-light-subtle rounded-5 col-sm-4 w-sm-100' style={{ width: '29rem' }} aria-label='Signup Form'>
        <legend className='text-secondary my-3 pb-3'>Register for an account</legend>

        <div className="form-floating mb-3">
          <input id="name" type="name" className="form-control rounded-pill" placeholder="Name" value={storedName} onChange={changeName} />
          <label htmlFor="name" className='fs-6'>Name</label>
        </div>

        <div className="form-floating mb-3">
          <input id="email" type="email" className="form-control rounded-pill" placeholder="name@example.com" value={storedEmail} onChange={changeEmail} />
          <label htmlFor="email" className='fs-6'>Email address</label>
        </div>

        <div className="form-floating mb-3">
          <input id="institute" type="institution" className="form-control rounded-pill" placeholder="Institute" value={storedInstitute} onChange={changeInstitute} />
          <label htmlFor="institute" className='fs-6'>Institute</label>
        </div>

        <div className="form-floating mb-3">
          <input id="address" type="address" className="form-control rounded-pill" placeholder="Address" value={storedAddress} onChange={changeAddress} />
          <label htmlFor="address" className='fs-6'>Address</label>
        </div>

        <div className="form-floating mb-3">
          <input id='password' type="password" className='form-control rounded-pill' placeholder="Password" value={storedPassword} onChange={changePassword} />
          <label htmlFor="password" className='fs-6'>Password</label>
        </div>

        <div className="form-floating">
          <input id='retypePassword' type="password" className='form-control rounded-pill' placeholder="Retype Password" value={storedRetypedPassword} onChange={changeRetypedPassword} />
          <label htmlFor="retypePassword" className='fs-6'>Re-type Password</label>
        </div>

        <div className='d-flex justify-content-between my-3 text-end'>

          <div><button className="btn icon-link fs-5 border border-secondary border-2 rounded-pill px-3 py-2 my-3 button-submit" onClick={register}>Register</button></div>
          <div>
            <p className='fs-6'>
              Already have an account?
              <a className="icon-link pt-3 ps-1" href="/login">Login</a>
            </p>
          </div>
        </div>

      </form>

    </div>
  )
}
