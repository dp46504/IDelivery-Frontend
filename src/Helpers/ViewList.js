import React from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'

export default function ViewList(props) {
  return (
    <>
      <Link to='/courier_homepage'>COURIER HOMEPAGE</Link>
      <Link to='/client_homepage'>CLIENT HOMEPAGE</Link>
      <Link to='/client_registration'>CLIENT REGISTRATION</Link>
      <Link to='/courier_registration'>COURIER REGISTRATION</Link>
      <Link to='/login'>LOG IN</Link>
      <Link to='/map'>MAP</Link>
      <Link to='/'>THIS PAGE</Link>
    </>
  )
}
