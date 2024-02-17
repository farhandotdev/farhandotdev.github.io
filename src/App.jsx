import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from "../src/components/Navbar"
import Connect from './components/connect/Connect'

function App() {
  return (
    <>
     <Navbar />
     <Outlet/>
     <Connect/>
    </>
  )
}

export default App
