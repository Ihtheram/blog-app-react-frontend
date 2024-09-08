import React from 'react'

export const SubmitCode = (/*props:{Email:string}*/) => {
  return (
    <div className='position-absolute top-50 start-50 translate-middle'>

      <form className='mx-auto container-fluid p-4 bg-light-subtle rounded-5 m-5 mw-25 col-sm-4' style={{width: '22rem'}} aria-label='Login Form'>
        <legend className='text-secondary my-3 pb-3'>Reset password</legend>

        <div className="mb-3">
          <label htmlFor="email" className='fs-6'>Email address</label>
          <p className="rounded-pill" id='email'>johndoe@email.com {/* {props.Email} */}</p>
        </div>
        <div className="form-floating">
          <input id='code' type="number" className='form-control rounded-pill' placeholder="Code" /*value={storedPassword} onChange={changePassword}*/ />
          <label htmlFor="code" className='fs-6'>Code</label>
        </div>

        <div className='d-flex justify-content-between my-3 text-end'>

          <div><button className="btn icon-link fs-5 border border-secondary border-2 rounded-pill px-3 py-2 my-3 button-risky" /*onClick={login}*/>Reset Password</button></div>
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
