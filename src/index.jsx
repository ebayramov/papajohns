import React, { createContext} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './pages/Main.jsx'
import Pizza from './pages/Pizza.jsx'
import Contact from './pages/Contact.jsx'
import { data } from './components/data.js'
import App from './components/App.jsx'
import Error from './pages/Error.jsx'

const router = createBrowserRouter([
  {path: "/papajohns/", element: <App />, children: [
    {path: "/papajohns/", element: <Pizza /> },
    {path: "main", element: <Main /> },
    {path: "pizza", element: <Pizza /> },
    {path: "contact", element: <Contact /> },
    {path: "*", element: <Error /> },
  ]}
])

export const pizzaData = createContext([])

ReactDOM.createRoot(document.getElementById('root')).render(
  <pizzaData.Provider value={data}>
    <RouterProvider router={router} />
  </pizzaData.Provider>
)
