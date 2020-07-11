const AppContextReducer = (state, action) => {
  switch (action.type) {
    case `CHANGE_THEME`:
      return {
        ...state,
        theme: action.payload.theme
      }
  }
}

export default AppContextReducer