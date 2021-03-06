import React from "react"

import "./Navigation.css"

function Navigation() {
  return (
    <nav className="Navigation">
      <ul className="Navigation-list">
        <li><a href="https://github.com/wlto" target="_blank" rel="noreferrer">GitHub</a></li>
        <li>/</li>
        <li><a href="https://www.linkedin.com/in/william-to/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li>/</li>
        <li><a href="https://www.dropbox.com/s/f4fdzpnybr38xc9/WilliamTo_Resume.pdf?dl=0">Resume</a></li>
      </ul>
    </nav>
  )
}

export default Navigation