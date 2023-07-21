import React from 'react';
import useCustomHook from '../hooks/UseCustomHook';

function UserLogin() {
  const {
    login,
    handleLoginClick,
    handleChange,
    errorMessage
  } = useCustomHook();

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8'>
                <h4 className='display-5 mt-4 mb-3'>Admin Login</h4>
                <form className='form-group' onSubmit={handleLoginClick}>
                    <label >Email</label>
                    <input className='form-control' name='email' type='email'value={login.email} onChange={handleChange} />
                    <label>Password</label>
                    <input className='form-control' name='password' type='password' value={login.password} onChange={handleChange}/>
                    <button className='btn btn-primary mt-3'>Login</button>
                </form>
                {errorMessage && <div className='alert alert-danger mt-3'>{errorMessage}</div>}
            </div>

        </div>

    </div>
  )
}

export default UserLogin
