import React from 'react'

function Header() {
  return (
    <div>
        <nav className='navbar navbar-light bg-light ' >

        <a className='navbar-brand'>RESTAURANT</a>
        <button className='btn btn-primary'>
            Orders<span className='badge bg-secondary'>5</span>
        </button>
        </nav>
    </div>
  )
}

export default Header