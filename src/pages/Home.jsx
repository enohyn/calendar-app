import React, { useEffect, useState } from 'react'
import UpcomingHolidays from '../components/UpcomingHolidays'
import GlobalRechargeDay from '../components/GlobalRechargeDay'
import axios from 'axios'

const Home = () => {
  const [country, setCountry] = useState({});
  const[apiData, setData] = useState({});
  const handleSelectValue = (event) => {
    setCountry(event.target.value)
  }
  useEffect(() => {
    let handleData = axios.get(`http://localhost:8000/${country}`).then((res) => {setData(res.data) }).catch((err) => console.log(err))
  }, [country])


  return (
    <section className='h-100 min-vh-100 lg:h-screen d-flex flex-column justify-content-center bg-dark-subtle  bg-gradient '>
      <div className='w-100 d-flex justify-content-end p-2'>
        <select name="country" id="select-country" className='col-10 col-md-5 col-lg-4 p-2' value={country} onChange={handleSelectValue} >
          <option disabled selected placeholder='Select Country' >
            Select Country
          </option>
          <option value="USA"> USA </option>
          <option value="Bangladesh"> Bangladesh </option>
          <option value="Netherland"> Netherland </option>
        </select>
      </div>
      <div className="d-flex flex-column row-gap-4 ">
        <UpcomingHolidays countries={country} />
        <GlobalRechargeDay countries={country} />
      </div>
    </section>
  )
}

export default Home