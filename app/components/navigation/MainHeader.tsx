import { NavLink } from '@remix-run/react'
import Logo from '../util/Logo'

export default function MainHeader() {
  return (
    <header id='main-header'>
      <Logo />
      <nav id='main-nav'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/pricing'>Pricing</NavLink>
          </li>
        </ul>
      </nav>
      <nav id='cta-nav'>
        <ul>
          <li>
            <a
              href='/auth'
              className='cta'
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
