import React from 'react'
import '../styles/LoginForm.css'

function LoginForm() {
  const onSubmitHandle = (e)=>{
    e.preventDefault();
  }

  return (
    <div>
        <form className='login-form' method='POST' onSubmit={onSubmitHandle}>
          <p>Login</p>
          <input className='login' name='login' placeholder='Login'/>
            <p>Hasło</p>
          <input className='password' name='password' type='password' placeholder='Hasło'/>
            <input className='button' name='submit' type="submit" value={"Zaloguj sie!"} />
        </form>
    </div>
  )
}

export default LoginForm