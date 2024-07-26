import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
import { DestinationsInterface } from '../utils/intrefaces'

const SavedTrips = () => {


    const [myTrips, setMyTrips] = useState<DestinationsInterface[]>([])

    useEffect(() => {
        const destinationsLocalStorage = localStorage.getItem("myTrips")

        if(destinationsLocalStorage){
            const trips = JSON.parse(destinationsLocalStorage)
            setMyTrips(trips)
        }
    }, [])

    //TESTA ATT GÖRA OM DETTA

    function removeTrip(tripID: number){
        const updateTrips = myTrips.filter(trip => trip.id !== tripID)

        localStorage.setItem("myTrips", JSON.stringify(updateTrips))

        setMyTrips(updateTrips)
    }

  return (
    <>
    <div className='flex flec-col justify-center'>
    <section className="mx-10 max-w-[800px]">
      <nav className="flex flex-row justify-between items-center my-6">
        <Link to={"/"}>
        <i className="fa-solid fa-arrow-left text-primary-100 text-20"></i>
        </Link>
        
        <Link to={"/saved-trips"}>
        <h1 className="text-primary-100 text-18 font-lexend font-bold ">Saved Trips</h1>
        </Link>
      </nav>

      {myTrips.map((trip) => (
<>
<div key={trip.id} className='flex bg-image-gradient w-auto h-80 rounded-md'>
        <div className='flex flex-col items-end justify-end p-6 w-full'>
          <div className='flex flex-row justify-between w-full'>
            <article className='flex flex-col'>
              <h1 className='font-lexend text-20 font-bold text-white'>{trip.country}</h1>
              <h1 className='font-lexend text-20 text-white'>{trip.city}</h1>
            </article>
            <div onClick={() => removeTrip(trip.id)} className='flex self-end cursor-pointer'>
              <i className="fa-solid fa-x text-white text-[25px]"></i>
              
            </div>
            

          </div>
        </div>
      </div>

      <article>
        <h2 className='font-lexend text-20 font-bold text-primary-100 mt-6'>
        {trip.country} in short
        </h2>
        <p className='font-lexend text-14 text-black my-6'>
        {trip.countryInShort}
        </p>
      </article>
      
      <article>
        <h2 className='font-lexend text-20 font-bold text-primary-100 mt-6 inline'>
          Top 5 must visit
        </h2>
        <i className="fa-solid fa-chevron-down text-20 text-primary-100 ml-4"></i>
        <ol style={{ listStyleType: 'decimal' }} className='ml-4'>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>{trip.mustVisit[0].place}:</span> {trip.mustVisit[0].description}
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>{trip.mustVisit[1].place}:</span> {trip.mustVisit[1].description}
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>{trip.mustVisit[2].place}:</span> {trip.mustVisit[2].description}
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>{trip.mustVisit[3].place}:</span> {trip.mustVisit[3].description}
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>{trip.mustVisit[4].place}:</span> {trip.mustVisit[4].description}
          </li>
        </ol>
      </article>
</>

      ))}

      
    </section>
    </div>
    
    
    
    </>
  )
}

export default SavedTrips