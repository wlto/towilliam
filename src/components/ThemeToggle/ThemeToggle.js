import React, { useEffect, useContext } from "react"

import { AppContext } from "../../contexts/AppContext"

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
    }}>ThemeToggle</div>
  )
}

export default ThemeToggle