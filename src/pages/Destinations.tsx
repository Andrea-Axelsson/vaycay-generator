import {Link} from 'react-router-dom'
import '../index.css'

const Destinations = () => {
  return (
    <>
    <section className="mx-10">
      <nav className="flex flex-row justify-between items-center my-6">
        <Link to={"/"}>
        <i className="fa-solid fa-arrow-left text-primary-100 text-20"></i>
        </Link>
        
        <Link to={"/saved-trips"}>
        <h1 className="text-primary-100 text-18 font-lexend font-bold ">Saved Trips</h1>
        </Link>
      </nav>

      <div className='bg-image-gradient w-auto h-80 rounded-md'></div>

    </section>
    
    
    </>
    
    
  )
}

export default Destinations