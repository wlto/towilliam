import React from "react"

import "./Heading.css"

function Heading({ children }) {
  return (
    <h1 className="Heading">
      {
        children.split(``).map((letter, index) => {
          return letter === ` ` ? <div key={index}></div> : <span className="Heading-letter" key={index}>{letter}</span>
        })
      }
    </h1>
  )
}

export default Heading