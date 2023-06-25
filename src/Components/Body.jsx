import React from "react"

const Body = (props) => {
  const { container } = props
  return <div className={container}>{props.children}</div>
}

export default Body
