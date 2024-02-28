import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Loginpage from './Components/LoginPage/Loginpage'
import Main from './Components/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route exact path='' element={<Loginpage />}></Route>
          <Route exact path='/main' element={<Main/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
