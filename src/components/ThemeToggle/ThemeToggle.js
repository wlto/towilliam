import React, { useEffect, useContext } from "react"

import { AppContext } from "../../contexts/AppContext"
import MoonIcon from "../../assets/icons/moon.svg"
import SunnyIcon from "../../assets/icons/sunny.svg"

import "./ThemeToggle.css"

const ThemeToggle = () => {
  const { state, dispatch } = useContext(AppContext)

  useEffect(() => {
    dispatch({
      type: `CHANGE_THEME`,
      payload: {
        theme: window.__theme
      }
    })
    window.__onThemeChange = () => {
      dispatch({
        type: `CHANGE_THEME`,
        payload: {
          theme: window.__theme
        }
      })
    }
  }, [])

  return (
    <div className="ThemeToggle" onClick={() => {
      window.__setPreferredTheme(window.__theme === `dark` ? `light` : `dark`)
    }}>
      <div className="ThemeToggle-knob"></div>
      <span className="ThemeToggle-icon" role="img" aria-label="moon"><MoonIcon /></span>
      <span className="ThemeToggle-icon" role="img" aria-label="sunny"><SunnyIcon /></span>
    </div>
  )
}

export default ThemeToggle