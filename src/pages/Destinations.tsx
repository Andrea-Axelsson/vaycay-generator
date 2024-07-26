import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import '../index.css'
import { DestinationsInterface } from '../utils/intrefaces'
import { useState } from 'react'

interface LocationState{
  selectedValues: DestinationsInterface[];
}

const Destinations: React.FC = () => {


  const location = useLocation()
  const state = location.state as LocationState
  const {selectedValues} = state || {selectedValues: []}

  console.log("Selected values", selectedValues)


  const [index, setIndex] = useState<number>(0)
  const [isClicked, setIsClicked] = useState<boolean>(false)
  console.log("index", index)
  console.log("isClicked", isClicked)


function newVayCay(){

    if(index < selectedValues.length - 1){
      console.log("new index")
      setIndex((prevIndex) => prevIndex + 1)
      setIsClicked(false)
    }else if(index >= selectedValues.length - 1){
      console.log("Start over")
      setIndex(0)
      setIsClicked(false)
    }
}

//Local storage logic

let myTrips: DestinationsInterface[] = []

let destinationsLocalStorage = localStorage.getItem("myTrips")

if(destinationsLocalStorage){
  myTrips = JSON.parse(destinationsLocalStorage) as DestinationsInterface[]
}

console.log("my Trips", myTrips)

function saveTrip(){

  setIsClicked(prevIsClicked => prevIsClicked = !prevIsClicked)

  if(selectedValues[index]){
    myTrips.push(selectedValues[index])

    localStorage.setItem("myTrips", JSON.stringify(myTrips))
  }else{
    console.error("selectedValues[index] is undefined or null")
  }
}

//Render
    
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

      <div className='flex bg-image-gradient w-auto h-80 rounded-md'>
        <div className='flex flex-col items-end justify-end p-6 w-full'>
          <div className='flex flex-row justify-between w-full'>
            <article className='flex flex-col'>
              <h1 className='font-lexend text-20 font-bold text-white'>{selectedValues[index].country}</h1>
              <h1 className='font-lexend text-20 text-white'>{selectedValues[index].city}</h1>
            </article>
            <div onClick={() => saveTrip()} className='flex self-end cursor-pointer'>
              {isClicked ? <i className="fa-solid fa-heart text-primary-100 text-[25px]"></i> : <i className="fa-regular fa-heart text-white text-[25px]"></i>}
              
            </div>
            
            {/* <i className="fa-solid fa-heart"></i> */}
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center'>
        <button onClick={() => newVayCay()} className='bg-primary-100 font-lexend text-white font-bold py-2 px-4 rounded-full mt-9 hover:bg-primary-200 transition duration-300 ease-in-out transform'>New VayCay</button>
      </div>

      <article>
        <h2 className='font-lexend text-20 font-bold text-primary-100 mt-6'>
        {selectedValues[index].country} in short
        </h2>
        <p className='font-lexend text-14 text-black my-6'>
        {selectedValues[index].countryInShort}
        </p>
      </article>
      
      <article>
        <h2 className='font-lexend text-20 font-bold text-primary-100 mt-6 inline'>
          Top 5 must visit
        </h2>
        <i className="fa-solid fa-chevron-down text-20 text-primary-100 ml-4"></i>
        <ol style={{ listStyleType: 'decimal' }} className='ml-4'>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>{selectedValues[index].mustVisit[0].place}:</span> {selectedValues[index].mustVisit[0].description}
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>{selectedValues[index].mustVisit[1].place}:</span> {selectedValues[index].mustVisit[1].description}
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>{selectedValues[index].mustVisit[2].place}:</span> {selectedValues[index].mustVisit[2].description}
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>{selectedValues[index].mustVisit[3].place}:</span> {selectedValues[index].mustVisit[3].description}
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>{selectedValues[index].mustVisit[4].place}:</span> {selectedValues[index].mustVisit[4].description}
          </li>
        </ol>
      </article>
      
    </section>
    </div>
    
    
    
    </>
  )
}

export default Destinations
