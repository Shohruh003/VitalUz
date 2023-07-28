import { useEffect, useState } from "react"
import Loading from './Loader/IMG_2945.mp4';
import { Contract } from "./components/Modal/Contract";

export const Public = () => {
  const [contract, setContract] = useState(false)

  const [loading, setLoading ] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setContract(true)
    }, 2800)
  },[])

  return (
    <div>
      {
        loading?
        <video className='loader' src={Loading} autoPlay loop muted/>
        :
        <Contract contract={contract} setContract={setContract}/>
      }
    </div>
  )
}