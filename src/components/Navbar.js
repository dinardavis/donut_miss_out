import * as React from 'react'
import { Link } from 'gatsby'
import mainLogo from "../assets/imgs/main_logo.png"

export default function Navbar() {

  return (
    <nav className='main-nav'>
      <div className='logo-container'>
        <Link to="/#home">
          <img className='main-logo' src={mainLogo} alt='Donut Miss Out Logo' />
        </Link>
        <div className='burger'>
          <div className='burger-line'></div>
          <div className='burger-line'></div>
          <div className='burger-line'></div>
        </div>
      </div>
      <ul>
        <li>
          <Link to="/#about" activeClassName='active-link'>about</Link>
        </li>
        <li>
          <Link to="/#donuts" activeClassName='active-link'>our donuts</Link>
        </li>
        <li>
          <Link to="/#order" activeClassName='active-link'>order online</Link>
        </li>
        <li>
          <Link to="/#reviews" activeClassName='active-link'>reviews</Link>
        </li>
        <li>
          <Link to="/contact" activeClassName='active-link'>contact</Link>
        </li>
      </ul>
    </nav>
  )
}