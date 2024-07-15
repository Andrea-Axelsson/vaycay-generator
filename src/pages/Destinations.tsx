import {Link} from 'react-router-dom'
import thailand1 from  '/images/thailand1.jpg'
import thailand2 from  '/images/thailand2.jpg'
import thailand3 from  '/images/thailand3.jpg'
import thailand4 from  '/images/thailand4.jpg'
import thailand5 from  '/images/thailand5.jpg'

import '../index.css'
import Carousel from '../components/Carousel'




const Destinations = () => {

  
const slides = [thailand1, thailand2, thailand3, thailand4, thailand5]


  return (
    <>
    <section className="mx-10">
      <nav className="flex flex-row justify-between items-center my-6">
        <Link to={"/"}>
        <i className="fa-solid fa-arrow-left text-primary-100 text-20"></i>
        </Link>
        
        <Link to={"/saved-trips"}>
        <h2 className="text-primary-100 text-18 font-lexend font-bold ">Saved Trips</h2>
        </Link>
      </nav>

      {/* CAROUSEL */}
      
      <div>
      <Carousel>
      {slides.map((s) => (
        <img src={s} />
      ))}
      </Carousel>
      </div>
   
      {/* CAROUSEL */}

      <div className='flex bg-image-gradient w-auto h-80 rounded-md'>
        <div className='flex flex-col items-end justify-end p-6 w-full'>
          <div className='flex flex-row justify-between w-full'>
            <article className='flex flex-col'>
              <h3 className='font-lexend text-14 text-white'>1 Week in</h3>
              <h1 className='font-lexend text-20 font-bold text-white'>Thailand</h1>
              <h1 className='font-lexend text-20 text-white'>Phuket</h1>
            </article>
            <div className='flex self-end'>
              <i className="fa-regular fa-heart text-white text-[25px]"></i>
            </div>
            
            {/* <i className="fa-solid fa-heart"></i> */}
          </div>
        </div>
      </div>

      <article>
        <h2 className='font-lexend text-20 font-bold text-primary-100 mt-6'>
          Thailand in short
        </h2>
        <p className='font-lexend text-14 text-black my-6'>
        Iceland is a land of dramatic landscapes, from glaciers to volcanoes, where the Northern Lights dance across the night sky, making it a unique travel destination that captivates adventurers.
        </p>
      </article>
      
      <article>
        <h2 className='font-lexend text-20 font-bold text-primary-100 mt-6 inline'>
          Top 5 must visit
        </h2>
        <i className="fa-solid fa-chevron-down text-20 text-primary-100 ml-4"></i>
        <ol style={{ listStyleType: 'decimal' }} className='ml-4'>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>Reykjavik:</span> Iceland's capital is a vibrant hub of culture and history. Explore its museums, vibrant streets, and enjoy the lively atmosphere of this charming city.
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>Reykjavik:</span> Iceland's capital is a vibrant hub of culture and history. Explore its museums, vibrant streets, and enjoy the lively atmosphere of this charming city.
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>Reykjavik:</span> Iceland's capital is a vibrant hub of culture and history. Explore its museums, vibrant streets, and enjoy the lively atmosphere of this charming city.
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>Reykjavik:</span> Iceland's capital is a vibrant hub of culture and history. Explore its museums, vibrant streets, and enjoy the lively atmosphere of this charming city.
          </li>
          <li className='font-lexend text-14 text-black my-6'>
          <span className='font-bold'>Reykjavik:</span> Iceland's capital is a vibrant hub of culture and history. Explore its museums, vibrant streets, and enjoy the lively atmosphere of this charming city.
          </li>
        </ol>
      </article>

    </section>
    
    
    </>
    
    
  )
}

export default Destinations