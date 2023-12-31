import './footer.css'
import Logo from '../../Images/logo.svg'
import InstagramIcon from '../../Images/instagram.svg'
import FacebookIcon from '../../Images/facebook.svg'
import TelegramIcon from '../../Images/telegram.svg'
import GuvohnomaIcon from '../../Images/certification.png'
import SkachatDokIcon from '../../Images/free-icon-google-docs-2991108.png'
import SertifikatIcon from '../../Images/sertifikat-Icon.png'
import { Link } from 'react-router-dom'
import { GuvohnomaModal } from '../Modal/GuvohnomaModal'
import { useState } from 'react'
import { Sertifikat } from '../Modal/Sertifikat'


export const Footer = () => {
  const [guvohnomaModal, setGuvohnomaModal] = useState(false);
  const [sertifikat, setSertifikat] = useState(false);

  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="container">
          <div className="footer-inner">
            <img className='site-logo' src={Logo} alt="Site-logo" width='50' height='30' />

              <Link className='network-link document-link' to='' onClick={() => {
              setGuvohnomaModal(true)
            }}>
                <img className='network-icon' src={GuvohnomaIcon} alt="network-icon" width='30' height='30' />
                Guvohnoma
              </Link>

              <Link className='network-link document-link' to='' onClick={() => {
              setSertifikat(true)
            }}>
                <img className='network-icon' src={SertifikatIcon} alt="network-icon" width='30' height='30' />
                Sertifikat
              </Link>

              <Link className='network-link document-link' target="_blank" to='https://sg.docworkspace.com/l/sIOjuw73OAdz3g6YG'>
                <img className='network-icon' src={SkachatDokIcon} alt="network-icon" width='30' height='30' />
                Skachat dokument
              </Link>

            <div className="footer-networks">
              <Link className='network-link' target="_blank" to='http://instagram.com/Vital.uzb'>
                <img className='network-icon' src={InstagramIcon} alt="network-icon" width='30' height='30' />
                Instagram
              </Link>

              <Link className='network-link' target="_blank" to='http://fb.com/Vital.uzb'>
                <img className='network-icon' src={FacebookIcon} alt="network-icon" width='30' height='30' />
                Facebook
              </Link>

              <Link className='network-link' target="_blank" to='https://t.me/Vitaluzbekistan'>
                <img className='network-icon' src={TelegramIcon} alt="network-icon" width='30' height='30' />
                Telegram
              </Link>

              <GuvohnomaModal guvohnomaModal={guvohnomaModal} setGuvohnomaModal={setGuvohnomaModal} />
              <Sertifikat sertifikat={sertifikat} setSertifikat={setSertifikat}/>
            </div>
          </div>
        </div>
      </div>
      <div className="water-liquid"></div>
    </div>
  )
}