import Loader from './Loader/IMG_2945.mp4';
import { useEffect, useState } from 'react';
import { Home } from './Pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';

function App() {

  const [loading, setLoading ] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2800)
  },[])

  return (
    <div className="App">
      {
        loading?
        <video className='loader' src={Loader} autoPlay loop muted/>
        :
        <div>
          <Header/>
          <Home/>
          <Footer/>
        </div>
      }
    </div>
  );
}

export default App;
