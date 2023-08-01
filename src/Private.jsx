import { Home } from "./Pages/Home/Home"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import Loading from './Loader/IMG_2945.mp4';
import { useEffect, useState } from "react";



export const Private = () => {

  const [loading, setLoading ] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2800)
  },[])
  
  return (
    <div>
      {
        loading?
        <video className='loader' src={Loading} autoPlay loop muted/>
        :
        <div>
          <Header/>
          <Home/>
          <Footer/>
        </div>
      }
    </div>
  )
}