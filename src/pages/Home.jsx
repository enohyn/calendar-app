import React, { useEffect, useState } from 'react'
import UpcomingHolidays from '../components/UpcomingHolidays'
import GlobalRechargeDay from '../components/GlobalRechargeDay'
import axios from 'axios'
import { FaSun } from 'react-icons/fa6';
import { HiMoon } from 'react-icons/hi';

const Home = () => {
  const [country, setCountry] = useState("USA");
  const [upcomingHoliday, setUpcomingHoliday] = useState([]);
  const [rechargeDay, setRechargeDay] = useState([])

  const [darkMode, setDarkMode] = useState(false)

  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleSelectValue = async (event) => {
    setCountry(event.target.value)
    const country = event.target.value;

    await handleData(country)
  }
  // await axios.get(`http://localhost:8000/${country}`).then((res) => {setData(res.data) }).catch((err) => console.log(err))
  const handleData = async (country) => {
    try {
      const response = await axios.get(`http://localhost:8000/countries`)
      const allHolidays = response.data;
      setUpcomingHoliday(allHolidays[country].UpcomingHoliday)
      setRechargeDay(allHolidays[country].GlobalRecharge)
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    handleData(country);
  }, [])


  return (
    <section data-bs-theme={`${ darkMode? 'dark' : 'light'}`} className={`h-100 min-vh-100 lg:h-screen d-flex flex-column justify-content-center  ${ darkMode? 'text-white bg-dark ' : 'text-dark bg-dark-subtle '} bg-gradient`}> 
      <div className='w-100 d-flex justify-content-between align-items-center p-2'>
        <div onClick={handleDarkMode} className={`border-1 rounded-2 toggler d-flex align-items-center cursor-pointer  ${darkMode ? 'justify-content-start ': 'justify-content-end'}`} style={{width:'50px', maxHeight:'20px'}}>
          <button> {darkMode ? <HiMoon color='gray'  /> : <FaSun color='yellow' />} </button>
        </div>
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
        <UpcomingHolidays comingHolidays={upcomingHoliday} />
        <GlobalRechargeDay rechargeDays={rechargeDay} />
      </div>
    </section>
  )
}

export default Home
// ${ darkMode? 'bg-dark' : 'bg-dark-subtle '}