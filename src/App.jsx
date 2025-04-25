import './App.css'
import Navbar from './Shared/Navbar/Navbar'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './Routes'
import Layout from './Layout'
import { useEffect, useState } from 'react'
import SplashScreen from './SplashScreen'
import { Toaster } from 'react-hot-toast'

function App() {


  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <SplashScreen />
  }


  return (
    <>


    <Toaster position="top-center" reverseOrder={false} />
    <BrowserRouter>
      <Routes>
        {
          routes?.map((i)=>(
           
            <Route path={i.path} element={ <Layout>{i.element} </Layout>}/>

           
          ))
        }
      </Routes>
    </BrowserRouter>
  
    </>
  )
}

export default App
