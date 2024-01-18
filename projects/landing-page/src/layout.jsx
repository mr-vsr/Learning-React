import React from 'react'
import {Header,Footer} from './components/index'
import { Outlet } from 'react-router-dom'

//<Outlet /> This will act as a place holder for various components which will be rendered in its place

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout