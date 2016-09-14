import React from 'react'
import { Link } from 'react-router'
import styles from './Header.css'

function NavHeader() {
  return (
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/index">Q Admin</a>
    </div>
  )
}

export default NavHeader
