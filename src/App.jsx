import Loading from './Loader/IMG_2945.mp4';
import { useEffect, useState } from 'react';
import { Home } from './Pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Loader } from './Hooks/Loader';
import { ClipLoader } from 'react-spinners';

function App() {
  const {loader} = Loader()

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
        <video className='loader' src={Loading} autoPlay loop muted/>
        :
            <div>
              {
                loader ?
                <ClipLoader
                  color={"#D00218"}
                  loader={loader}
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
                :
                <div>
                  <Header/>
                  <Home/>
                  <Footer/>
                </div>
              }
            </div>
      }
    </div>
  );
}

export default App;
