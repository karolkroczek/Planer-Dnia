import React from 'react'

function LoginForm() {
  return (
    <div>
        <form method='GET' onSubmit={(e)=>preventDefault()}>
            <input></input>
            <input type={password}></input>
        </form>
    </div>
  )
}

export default LoginForm