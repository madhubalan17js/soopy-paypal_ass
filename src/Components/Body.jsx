import React from "react"

const Body = (props, { container }) => {
  return <div className={container}>{props.children}</div>
}

export default Body
