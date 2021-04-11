import React from 'react'
import Header from '../global/Header'
import PropTypes from 'prop-types'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout
