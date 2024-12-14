
import './App.css'
import Navbar from './components/navbar'
import { Button } from './components/ui/button'
import MainLayout from './layout/MainLayout'
import Login from './pages/login'
import HeroSection from './pages/student/HeroSection'
import {createBrowserRouter, RouterProvider }from 'react-router-dom';

const appRouter=createBrowserRouter([
  {
    path:"/",
      element :<MainLayout/>,
      children:[
        {
          path:"/",
          element:<>
          <HeroSection/>
          {/* courses */}
          </>
        },

        {
          path:"login",
          element :<Login/>
        }

      ],
  }
])

function App() {
  
  return (
    <main>
     <RouterProvider router={appRouter}/>
    </main>
  )
}

export default App
