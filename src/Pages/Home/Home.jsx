import { Accordion, Table } from "react-bootstrap";
import "./home.css";
import WaterImg from "../../Images/header-vital-removebg-preview.png";
import { useEffect, useState } from "react";
import axios from "axios";
import { Contract } from "../../components/Modal/Contract";
import { Check } from "../../Hooks/Check";
import { TrueModal } from "../../components/Modal/TrueModal";
import TimeOut from "../../components/TimeOut/TimeOut";
import { Client } from "../../Hooks/Client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OrderModal from "../../components/Modal/OrderModal";

export const Home = () => {
  const [modal, setModal] = useState(false);

  const [countdown, setCountdown] = useState(36 * 60 * 60 * 1000);
  const [deliveryTime, setDeliveryTime] = useState(
    localStorage.getItem("count") || 0
  );
  const { isChecked } = Check();
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [isDivVisible, setIsDivVisible] = useState(false);
  const { client, setClient } = Client();
  const [contract, setContract] = useState(false);
  const [trueModal, setTrueModal] = useState(false);
  const [buy, setBuy] = useState();
  const queryParameters = new URLSearchParams(window.location.search);
  const code = queryParameters.get("code");

  const handleStart = () => {
    localStorage.setItem("count", new Date().getTime() + countdown);
    setDeliveryTime(new Date().getTime() + countdown);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    setPrice(event.target.value * client?.price);
  };

  useEffect(() => {
    console.log(modal,"modal")
    const config = {
      method: "post",
      url: "https://vitalwater.uz/Vital_Planshet/hs/site/counterparty/info",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic UGxhbnNoZXRVc2VyOlVTUkA2NTAxNTU5",
      },
      data: JSON.stringify({
        auth: {
          login: "site_user",
          password: "x]sh9fD/mSZGHQ=V",
        },
        counterparty: code,
        signed: isChecked,
      }),
    };

    axios(config)
      .then((response) => setClient(response.data))
      .catch((error) => console.log("error", error));
  }, []);

  useEffect(() => {
    const purchase = {
      method: "post",
      url: "https://vitalwater.uz/Vital_Planshet/hs/data/summary/get",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic UGxhbnNoZXRVc2VyOlVTUkA2NTAxNTU5",
      },
      data: JSON.stringify({
        auth: {
          login: "site_user",
          password: "x]sh9fD/mSZGHQ=V",
        },
        counterparty: {
          code: code,
        },
        dateN: "04.11.2001",
        dateK: "31.12.2028",
      }),
    };

    axios(purchase)
      .then((response) => setBuy(response.data))
      .catch((error) => console.log("error", error));
  }, []);

  const orderSubmit = (event) => {
    event.preventDefault();
    if (quantity >= 3) {
      setModal(true);
      localStorage.setItem("isDivVisible", JSON.stringify(true));
      handleStart();
      setIsDivVisible(true);
      document.getElementById("quantity").value = "";
      document.getElementById("price").value = "";

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append(
        "Authorization",
        "Basic UGxhbnNoZXRVc2VyOlVTUkA2NTAxNTU5"
      );

      var raw = JSON.stringify({
        auth: {
          login: "site_user",
          password: "x]sh9fD/mSZGHQ=V",
        },
        counterparty: code,
        quantity: quantity,
        delivery_time: "ДоОбеда",
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "https://vitalwater.uz/Vital_Planshet/hs/site/order/post",
        requestOptions
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    } else {
      toast.warning("Eng kam 3 ta buyurtma bera olasiz !", {
        className: "custom-toast-warning",
      });
      setIsDivVisible(false);
    }
  };

  return (
    <div className="home">
      <div className="container">
        <div className="home-inner">
          <Accordion defaultActiveKey={["0"]} alwaysOpen>
            <Accordion.Item className="accordion-item" eventKey="0">
              <Accordion.Header>
                <div className="accordion-header">
                  <p className="accordion-name">MCHJ Vital World</p>
                  <p className="accordion-item-span">Sotuvchi:</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="accordion-list">
                  <li className="accordion-listItem">
                    <p>Shahar:</p>
                    <p className="city">Ташкент</p>
                  </li>

                  <li className="accordion-listItem">
                    <p>Adress:</p>
                    <p className="address">
                      Toshkent viloyati, Zangiota tumani, Mustaqillik 2-tor
                      ko`chasi, 1 "A" uy,
                    </p>
                  </li>

                  <li className="accordion-listItem">
                    <p>INN:</p>
                    <p className="tin">305879129</p>
                  </li>

                  <li className="accordion-listItem">
                    <p>Tel:</p>
                    <p className="phone">
                      +99870-202-8080 <br /> +99899-904-8080 <br />{" "}
                      +99899-914-8080
                    </p>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item className="accordion-item" eventKey="1">
              <Accordion.Header>
                <div className="accordion-header">
                  <p className="accordion-name">{client?.note}</p>
                  <p className="accordion-item-span">Xaridor:</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="accordion-list">
                  <li className="accordion-listItem">
                    <p>Adress:</p>
                    <p className="address">{client?.adress}</p>
                  </li>

                  <li className="accordion-listItem">
                    <p>Shahar:</p>
                    <p className="city">Ташкент</p>
                  </li>

                  <li className="accordion-listItem">
                    <p>Tel:</p>
                    <p className="phone">{client?.phones}</p>
                  </li>

                  <li className="accordion-listItem">
                    <p>Passport:</p>
                    <p className="passport">{client?.passport_serial}</p>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item className="accordion-item" eventKey="2">
              <Accordion.Header>
                <div className="accordion-header">
                  <p className="accordion-name">Solishtirish dalolatnomasi</p>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>Sana</th>
                      <th>Harakat</th>
                      <th>Soni</th>
                      <th>Konteynerlarni qaytarish</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buy?.osnova?.map((e) => (
                      <tr key={e?.data}>
                        <td>{e?.data}</td>
                        <td>{e?.dvijenie}</td>
                        <td>{e?.kolichestvo}</td>
                        <td>{e?.vozvrat_tari}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          

          <div className="liquid-div">
          {modal ? <OrderModal setModal={setModal} />:null}
          
            <h2 className="home-heading">Buyurtma berish</h2>
            <img
              className="WaterImg"
              src={WaterImg}
              alt="vital-water"
              width={500}
              height={300}
            />

            <form className="form">
              <div className="form-group">
                <div className="form-input">
                  <label className="mb-1" htmlFor="quantity">
                    Miqdori
                  </label>
                  <input
                    className="form-control mb-4"
                    type="number"
                    name="number"
                    placeholder="miqdori"
                    id="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min={3}
                  />
                  <ToastContainer />
                </div>

                <div className="form-input">
                  <label className="mb-1" htmlFor="price">
                    Narxi
                  </label>
                  <input
                    className="form-control mb-4"
                    type="number"
                    name="cost"
                    placeholder="narxi"
                    id="price"
                    value={price}
                    onChange={handlePriceChange}
                    readOnly
                  />
                </div>
              </div>

              <button onClick={orderSubmit} className="button">
                <span>Send</span>
                <div className="liquid"></div>
              </button>

              <Contract contract={contract} setContract={setContract} />
              <TrueModal trueModal={trueModal} setTrueModal={setTrueModal} />
              <TimeOut
                isDivVisible={isDivVisible}
                setIsDivVisible={setIsDivVisible}
                deliveryTime={deliveryTime}
                countdown={countdown}
              />
            </form>
          </div>

          <p className="home-bigtext">
            Sotuvchi xaridorga ushbu Shartnomada nazarda tutilgan tartibda va
            muddatlarda sifatli va to'g'ri qadoqlangan Tovarni topshirishi,
            Tovarni uchinchi shaxslarning huquqlaridan ozod qilishi shart.
            <br /> <br />
            Xaridor ushbu Shartnomada nazarda tutilgan tartibda va muddatlarda
            sotuvchidan Tovarni qabul qilishi, ushbu Shartnomada nazarda
            tutilgan tartibda va muddatlarda Tovar haqini to'lashi shart.
            <br /> <br />
            Mazkur Shartnoma bo‘yicha o‘tkazilgan Tovar va yetkazib berish
            xizmatlari narxi: {client?.price} (Yigirma sakkiz ming) so‘m.
            <br />
            <br />
            To'lov sanasi Xaridor tomonidan sotuvchiga naqd pul o'tkazilgan sana
            yoki sotuvchining hisob raqamiga pul mablag'lari kelib tushgan sana
            hisoblanadi.
            <br />
            <br />
            Iltimos, mahsulotni olgandan so'ng, qadoqning yaxlitligini
            tekshiring.
            <br />
            <br />
            Xaridingiz uchun rahmat!
          </p>
        </div>
      </div>
    </div>
  );
};
