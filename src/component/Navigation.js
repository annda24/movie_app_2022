import React from 'react'
import { Link } from 'react-router-dom'

import './Navigation.css'

// 함수형 컴포넌트
function Navigation() {
  return (
    <div className='nav'>
        <Link to="/">Home</Link>        {/* a Home */}
        <Link to="/About">About</Link>  {/* a About */}
    </div>
  )
}

export default Navigation