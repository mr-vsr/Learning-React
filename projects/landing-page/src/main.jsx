import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import {Home,About,Contact,Github,User} from './components/index.js'
import { githubInfoLoader } from './components/Github/Github.jsx'

//This is one way of creating routes here we have created a root route '/' now using the children key we have added all the other routes.
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}> //Parent route
      <Route path='' element={<Home />} />//Children routes
      <Route path='about' element={<About />} />//Children routes
      <Route path='contact' element={<Contact />} />//Children routes
      <Route path='user/:userid' element={<User />} />//Children routes
      <Route
        loader={githubInfoLoader}//If we have to call an api inside any component we can use this method to do so and call a function which is fired as soon as cursor reaches to that component
        path='github'
        element={<Github />}
      />//Children routes
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />//This is where all the things are going to its place.
  </React.StrictMode>,
)

//We don't use anchor tag in React because using anchor tag refreshes the page and thus can not retain the states whereas link and navlink doesn't refresh the page.
