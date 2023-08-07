import './header.css'
import HeadWater from '../../Images/vater.png'
import HeadVater from '../../Images/logo.svg'
import HeaderVital from '../../Images/header-vital-removebg-preview.png'
import { Client } from '../../Hooks/Client'


export const Header = () => {
  const queryParameters = new URLSearchParams(window.location.search)
  const code = queryParameters.get("code")
  const {client} = Client()


  return (
    <div className='header'>
        <div className="header-inner">
          <div className='header-hero'>
            <img className='headVater' src={HeadVater} alt="Header-water" width='700' height='300'/>
            <img className='headVater' src={HeaderVital} alt="Header-water" width='700' height='300'/>
          </div>
          <img className='headWater' src={HeadWater} alt="Header-water" />
          <p className='header-text'>Договор купли продажи № {code} от {client.date} </p>
        </div>
    </div>
  )
}