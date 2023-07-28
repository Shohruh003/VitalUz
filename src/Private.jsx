import { Home } from "./Pages/Home/Home"
import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"


export const Private = () => {
  return (
    <div>
      <div className="private">
        <Header/>
        <Home/>
        <Footer/>
    </div>
    </div>
  )
}