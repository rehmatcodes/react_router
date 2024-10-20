import { createElement, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home/home.jsx'
import { githubinfoloader } from './components/Github/github.jsx'

// const router =  createBrowserRouter([
//   // {
//   //   path: '/',
//   //   element : <layout/> ,
//   //   children:[ 
//   //     {
//   //       path :'',
//   //       element : <Home/>
//   //     } , 
//   //     {
//   //       path : 'about',
//   //       element : <about/>
//   //     },
//   //     {
//   //       path : 'contact',
//   //       element : <contact/>
//   //     }
//   //   ]
//   // }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<layout/>}  >
      <Route path='' element = {<Home/>} />
      <Route path='about' element = {<about/>} />
      <Route path='contact' element = {<contact/>} />
      <Route path='user/:id' element = {<user/>} />
      <Route 
     loader = {githubinfoloader}
      path='Github' element = {<Github/>}
      
      />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
