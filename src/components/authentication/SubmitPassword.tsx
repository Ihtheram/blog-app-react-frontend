import React from 'react'

export const SubmitPassword = (/*props:{Email:string}*/) => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle'>

      <form className='mx-auto container-fluid p-4 bg-light-subtle rounded-5 m-5 mw-25 col-sm-4' style={{width: '22rem'}}  aria-label='Login Form'>
        <legend className='text-secondary my-3 pb-3'>Reset password</legend>

        <div className="form-floating mb-3">
          <p className="rounded-pill" id='email'>address@email.com</p>
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

          <div><button className="btn icon-link fs-5 border border-secondary border-2 rounded-pill px-3 py-2 my-3 button-submit" /*onClick={login}*/>Reset Password</button></div>
          <div>
            <p className='fs-6'>
              <br />Try logging in?
              <a className="icon-link pt-3 ps-1" href="/login">Login</a>
            </p>
          </div>
        </div>

      </form>

    </div>
  )
}
