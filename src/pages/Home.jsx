import React from 'react'
import UpcomingHolidays from '../components/UpcomingHolidays'
import GlobalRechargeDay from '../components/GlobalRechargeDay'

const Home = () => {
  return (
    <section className='h-full lg:h-screen flex flex-col justify-center bg-gradient-to-br from-slate-300 via-gray-200 to-zinc-500'>
      <div className='w-full flex justify-end p-2'>
        <select name="country" id="select-country" className='w-3/4 md:w-2/4 lg:w-1/4 active:ring-0 rounded-lg p-2'>
          <option disabled placeholder='Select Country'>
            Select Country
          </option>
          <option value="USA"> USA </option>
          <option value="Bangladesh"> Bangladesh </option>
          <option value="Netherland"> Netherland </option>
        </select>
      </div>
      <div className="flex flex-col gap-y-5">
        <UpcomingHolidays />
        <GlobalRechargeDay />
      </div>
    </section>
  )
}

export default Home