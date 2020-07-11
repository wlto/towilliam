import React from "react"

import "./Navigation.css"

function Navigation() {
  return (
    <nav className="Navigation">
      <ul className="Navigation-list">
        <li><a href="https://github.com/wlto" target="_blank">GitHub</a></li>
        <li>/</li>
        <li><a href="https://www.linkedin.com/in/william-to/" target="_blank">LinkedIn</a></li>
        <li>/</li>
        <li><a href="https://www.dropbox.com/s/yn8ihr1jj4vjpiw/WilliamTo_Resume.pdf?dl=0">Resume</a></li>
      </ul>
    </nav>
  )
}

export default Navigation