import React from 'react'

const contextSave = React.createContext({
  savedList: [],
  saveItem: () => {},
  removeItem: () => {},
  Themes: () => {},
  theme: true,
})
export default contextSave
