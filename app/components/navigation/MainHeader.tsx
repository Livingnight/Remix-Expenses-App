import { Link } from '@remix-run/react'
import Logo from '../util/Logo'

export default function MainHeader() {
  return (
    <header id='main-header'>
      <Logo />
      <nav id='main-nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='pricing'>Pricing</Link>
          </li>
          <li>
            <Link to='expenses'>Expenses</Link>
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
