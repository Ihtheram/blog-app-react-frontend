import React from 'react'

export const Login = () => {
  return (
    <div className='mx-auto text-center justify-content-center min-vh-100'>

      <form className='mx-auto container-fluid p-4 bg-light-subtle rounded-5 m-5 mw-25 col-sm-4' aria-label='Login Form'>
        <legend className='text-secondary my-3 pb-3'>Login to your account</legend>

        <div className="form-floating mb-3">
          <input id="floatingEmail" type="email" className="form-control rounded-pill" placeholder="name@example.com" /*value={storedUsername} onChange={changeUsername}*/ />
          <label htmlFor="floatingInput" className='fs-6'>Email address</label>
        </div>
        <div className="form-floating">
          <input id='floatingPassword' type="password" className='form-control rounded-pill' placeholder="Password" /*value={storedPassword} onChange={changePassword}*/ />
          <label htmlFor="floatingPassword" className='fs-6'>Password</label>
        </div>

        <div className='d-flex justify-content-between my-3 text-end'>

          <div><button className="btn icon-link fs-5 border border-secondary border-2 rounded-pill px-3 py-2 my-3 button-submit" /*onClick={login}*/>LOGIN</button></div>
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
