import { Accordion } from 'react-bootstrap'
import './home.css'
import WaterImg from '../../Images/header-vital-removebg-preview.png'
import { useState } from 'react'


export const Home = () => {
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    const priceNumber = 10
    setPrice(event.target.value * priceNumber);
  };

  return (
    <div className='home'>
      <div className="container">
        <div className="home-inner">
        <Accordion defaultActiveKey={['0']} alwaysOpen>
          <Accordion.Item className='accordion-item' eventKey="0">
            <Accordion.Header>
              <div className="accordion-header">
                <p className="accordion-name">Shohruh Azimov</p>
                <p className='accordion-item-span'>Продавец:</p>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ul className='accordion-list'>
                <li className="accordion-listItem">
                  <p>Город:</p>
                  <p className='city'>Ташкент</p>
                </li>

                <li className="accordion-listItem">
                  <p>Адрес:</p>
                  <p className='address'>Toshkent r Yakkasaroy Boshliq mavzesi. 10A-uy</p>
                </li>

                <li className="accordion-listItem">
                  <p>ИНН:</p>
                  <p className='tin'>474262883</p>
                </li>

                <li className="accordion-listItem">
                  <p>Тел:</p>
                  <p className='phone'>942720705</p>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className='accordion-item' eventKey="1">
            <Accordion.Header>
              <div className="accordion-header">
                <p className="accordion-name">Yoqubov Bekmirza</p>
                <p className='accordion-item-span'>Продавец:</p>
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <ul className='accordion-list'>
                <li className="accordion-listItem">
                  <p>Город:</p>
                  <p className='city'>Ташкент</p>
                </li>

                <li className="accordion-listItem">
                  <p>Адрес:</p>
                  <p className='address'>Toshkent r Yakkasaroy Boshliq mavzesi. 10A-uy</p>
                </li>

                <li className="accordion-listItem">
                  <p>ИНН:</p>
                  <p className='tin'>474262883</p>
                </li>

                <li className="accordion-listItem">
                  <p>Тел:</p>
                  <p className='phone'>942720705</p>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <p className="home-text">Продавец передает в собственность Покупателя товар (наименование, вид, характеристики товара), а Покупатель обязуется принять Товар и уплатить за него цену в размере и в порядке, предусмотренных Договором.</p>

        <div className='liquid-div'>
          <h2 className='home-heading'>Buyurtma berish</h2>
          <img className='WaterImg' src={WaterImg} alt="vital-water" width={500} height={300} />

          <form className='form'>

                <div className='form-group'>
                  <div className='form-input'>
                    <label className='mb-1' htmlFor="quantity">Miqdori</label>
                    <input className='form-control mb-4' type="number" name="number" placeholder='miqdori' id="quantity" defaultValue={quantity} onChange={handleQuantityChange} min={1} />
                  </div>
              
              
                  <div className='form-input'>
                    <label className='mb-1' htmlFor="price">Narxi</label>
                    <input className='form-control mb-4' type="number" name="cost" placeholder='narxi' id="price" defaultValue={price} onChange={handlePriceChange} readOnly />
                  </div>
                </div>

                <button className='button'>
                  <span>Send</span>
                  <div className='liquid'></div>
                </button>
            

              </form>
        </div>

        <p className='home-bigtext'>
        Sotuvchi xaridorga ushbu Shartnomada nazarda tutilgan tartibda va muddatlarda sifatli va to'g'ri qadoqlangan Tovarni topshirishi, Tovarni uchinchi shaxslarning huquqlaridan ozod qilishi shart. 
          <br /> <br />
          Xaridor ushbu Shartnomada nazarda tutilgan tartibda va muddatlarda sotuvchidan Tovarni qabul qilishi, ushbu Shartnomada nazarda tutilgan tartibda va muddatlarda Tovar haqini to'lashi shart. 
          <br /> <br />
          Mazkur Shartnoma bo‘yicha o‘tkazilgan Tovar va yetkazib berish xizmatlari narxi: 28 000 (Yigirma sakkiz 
ming) so‘m.
<br /><br />
To'lov sanasi Xaridor tomonidan sotuvchiga naqd pul o'tkazilgan sana yoki sotuvchining hisob raqamiga pul mablag'lari kelib tushgan sana hisoblanadi.
<br /><br />
Iltimos, mahsulotni olgandan so'ng, qadoqning yaxlitligini tekshiring.
<br /><br />
Xaridingiz uchun rahmat!
        </p>
        </div>
      </div>
    </div>
  )
}