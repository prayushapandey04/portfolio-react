import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index: true,
                path: '/',
                element: <About />
            },
            {
                path: '/contact',
                element: <About />
            },
            {
                path: '/projects',
                element: <Projects />
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)