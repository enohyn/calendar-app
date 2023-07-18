import React, { useState, useEffect } from 'react'

const UpcomingHolidays = ({ comingHolidays }) => {

    useEffect(() => {
     console.log(comingHolidays)
    }, [])
    

    return (
        <section className='w-100 d-flex flex-column px-2 gap-2 '>
            <h3 className='px-2'>
                Upcoming Holidays
            </h3>

            <div className='row d-flex flex-column flex-md-row justify-content-between align-items-center px-4'>
                {comingHolidays.map((holiday) => (
                    <div key={holiday.id} className="px-lg-4 px-md-2 col-12 col-md-6 col-lg-3">
                        <div className="card text-center text-bg-light mb-3" style={{ height: "10rem" }}>
                            <h3 className="card-header">{holiday.title}</h3>
                            <div className="card-body">
                                <h4 className="card-title text-center ">{holiday.duration}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default UpcomingHolidays