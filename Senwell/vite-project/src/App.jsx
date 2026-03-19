import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { AuthContext } from './context/AuthContext'

function App() {
  const [count, setCount] = useState(0)

  const {user} = useContext(AuthContext)

  return (
    <>
      Hello, {user.name}
    </>
  )
}

export default App
