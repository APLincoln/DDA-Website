import React from 'react'
import Header from "../Header/Header"

const Layout = (props) => {
  return (
    <main className="flex-grow" >
      <Header> this is a header </Header>
      {props.children}
    </main>
  )
}

export default Layout