import './App.css'
import { useContext } from 'react'
import { ThemeContext } from './global/themeProvider'
import { Outlet, createBrowserRouter } from 'react-router-dom'
import { Theme } from './reusable/theme'
import { Navi } from './reusable/navi'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      {!theme && <Theme />}
      {theme && <Navi />}
      {theme && <Outlet />}
    </>
  )
}

export default App
