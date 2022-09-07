import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from './Cart'

export default function NavBar() {
  return (
    <div>
      <nav>
        <div>
          <NavLink to={'/'}> Nyc Life</NavLink>
        </div>
        <ul>
          <li>
          <NavLink to={'/category/:idCategory'}> Categoria </NavLink>            
          </li>
          <li>
          <NavLink to={'/cart'}>
            <Cart/>
          </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
