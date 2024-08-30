import React from 'react'

export const Register = () => {
  return (
    <div className='mx-auto text-center justify-content-center min-vh-100'>

      <form className='mx-auto container-fluid p-4 bg-light-subtle rounded-5 m-5 mw-25 col-sm-4' aria-label='Login Form'>
        <legend className='text-secondary my-3 pb-3'>Register for an account</legend>

        <div className="form-floating mb-3">
          <input id="name" type="name" className="form-control rounded-pill" placeholder="Name" /*value={storedName} onChange={changeName}*/ />
          <label htmlFor="name" className='fs-6'>Name</label>
        </div>

        <div className="form-floating mb-3">
          <input id="email" type="email" className="form-control rounded-pill" placeholder="name@example.com" /*value={storedEmail} onChange={changeEmail}*/ />
          <label htmlFor="email" className='fs-6'>Email address</label>
        </div>

        <div className="form-floating mb-3">
          <input id="institute" type="institution" className="form-control rounded-pill" placeholder="Institute" /*value={storedInstitute} onChange={changeInstitute}*/ />
          <label htmlFor="institute" className='fs-6'>Institute</label>
        </div>

        <div className="form-floating mb-3">
          <input id="address" type="address" className="form-control rounded-pill" placeholder="Address" /*value={storedAddress} onChange={changeAddress}*/ />
          <label htmlFor="address" className='fs-6'>Address</label>
        </div>

        <div className="form-floating">
          <input id='password' type="password" className='form-control rounded-pill' placeholder="Password" /*value={storedPassword} onChange={changePassword}*/ />
          <label htmlFor="password" className='fs-6'>Password</label>
        </div>

        <div className="form-floating">
          <input id='retypePassword' type="password" className='form-control rounded-pill' placeholder="Retype Password" /*value={storedRetypedPassword} onChange={changeRetypedPassword}*/ />
          <label htmlFor="retypePassword" className='fs-6'>Re-type Password</label>
        </div>

        <div className='d-flex justify-content-between my-3 text-end'>

          <div><button className="btn icon-link fs-5 border border-secondary border-2 rounded-pill px-3 py-2 my-3 button-submit" /*onClick={login}*/>Register</button></div>
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
