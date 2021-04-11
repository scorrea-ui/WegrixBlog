import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header className='c-header'>
      <div className='o-container'>
        <div className='o-grid o-grid--middle o-grid--between'>
          <Link className='c-header__logo' to={`/`}>
            Wegrix Blog
          </Link>
          <nav className='c-header__nav'>
            <ul className='c-header__list'>
              <li className='c-header__item'>
                <Link className='c-header__link' to={`/`}>
                  Home
                </Link>
              </li>
              <li className='c-header__item'>
                <Link className='c-header__link' to={`/`}>
                  About
                </Link>
              </li>
              <li className='c-header__item'>
                <Link className='c-header__link' to={`/`}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
