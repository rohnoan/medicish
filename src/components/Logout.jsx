import React from 'react'

export default function Logout() {
  return (
    <div>
      <div className='login-border '>
        <div>
          name:<input className='input-login' />
        </div>
        <div>
          email:<input className='input-login' />
        </div>
        <div>
          <button className='mt-[14px] bg-cyan-400 border-solid border-black border-2 rounded w-[90px]' >LOGIN</button>
        </div>
        
      </div>
      <div className='h-[200px]'></div>
    </div>
  )
}
