import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import Home from "./pages/Home.jsx"
import Projects from './pages/Projects.jsx'
import Quote from './pages/Quote.jsx'
import Photos from './pages/Photos.jsx'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
    <Route path='' element={<Home/>}/>
    <Route path='quote' element={<Quote/>}/>
    <Route path='projects' element={<Projects/>}/>
    <Route path='photo' element={<Photos/>}/>
  </Route>
))



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
