import React from 'react'

const Header = (props) => {
  return (
    <h className="w-full h-10" >
      <div>{props.children}</div>
    </h>
  )
}

export default Header