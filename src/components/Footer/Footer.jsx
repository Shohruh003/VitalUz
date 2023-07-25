import './footer.css'
import Logo from '../../Images/logo.svg'
import InstagramIcon from '../../Images/instagram.svg'
import FacebookIcon from '../../Images/facebook.svg'
import TelegramIcon from '../../Images/telegram.svg'
import SertifikatIcon from '../../Images/certification.png'
import SkachatDokIcon from '../../Images/free-icon-google-docs-2991108.png'
import { Link } from 'react-router-dom'
import { GuvohnomaModal } from '../Modal/GuvohnomaModal'
import { useState } from 'react'


export const Footer = () => {
  const [guvohnomaModal, setGuvohnomaModal] = useState(false);


  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="container">
          <div className="footer-inner">
            <img className='site-logo' src={Logo} alt="Site-logo" width='50' height='30' />

              <Link className='network-link document-link' to='' onClick={() => {
              setGuvohnomaModal(true)
            }}>
                <img className='network-icon' src={SertifikatIcon} alt="network-icon" width='30' height='30' />
                Sertifikat
              </Link>

              <Link className='network-link document-link' to='https://eco.delorean.uz/price/u/1689056168258.pdf'>
                <img className='network-icon' src={SkachatDokIcon} alt="network-icon" width='30' height='30' />
                Skachat dokument
              </Link>

            <div className="footer-networks">
              <Link className='network-link' to='http://instagram.com/Vital.uzb'>
                <img className='network-icon' src={InstagramIcon} alt="network-icon" width='30' height='30' />
                Instagram
              </Link>

              <Link className='network-link' to='http://fb.com/Vital.uzb'>
                <img className='network-icon' src={FacebookIcon} alt="network-icon" width='30' height='30' />
                Facebook
              </Link>

              <Link className='network-link' to='https://t.me/Vitaluzbekistan'>
                <img className='network-icon' src={TelegramIcon} alt="network-icon" width='30' height='30' />
                Telegram
              </Link>

              <GuvohnomaModal guvohnomaModal={guvohnomaModal} setGuvohnomaModal={setGuvohnomaModal} />
            </div>
          </div>
        </div>
      </div>
      <div className="water-liquid"></div>
    </div>
  )
}