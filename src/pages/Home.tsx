import '../index.css'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import {useNavigate} from 'react-router-dom'
import data from '../data.json'
import { DestinationsInterface } from '../utils/intrefaces'

const destinationsData: DestinationsInterface[] = data as DestinationsInterface[]


const Home: React.FC = () => {

const [checkedValue, setcheckedValue] = useState<string[]>([])
        

        console.log("checkedValue", checkedValue)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;

        if (checked){
            setcheckedValue(prev => [...prev, value])
        }else{
            setcheckedValue(prev => prev.filter(v => v !==value))
        }
  }

  const activity = ["historical", "beach", "cultural", "adventure", "nature", "city"]
  const continent = ["europe", "asia", "south-america", "north-america", "africa", "oceania"]

    const checkedActivity = checkedValue.filter((value) => 
    activity.some(act => value.includes(act))
    )

    const checkedContinent = checkedValue.filter((value) => 
    continent.some(act => value.includes(act))
    )


  const filterData = destinationsData.filter( function (dest)
  {
    console.log("begin") 
    console.log(checkedActivity)
    console.log(checkedContinent)

    if(checkedActivity.length > 0 && checkedContinent.length > 0)
    {
        console.log("dubble")
        return checkedActivity.some(check => dest.tags.includes(check) && checkedContinent.some(check => dest.continent.includes(check)))
    
    }else if (checkedActivity.length > 0 && checkedContinent.length <= 0){
        console.log("ONLY ACTIVITY")
        return checkedActivity.some(check => dest.tags.includes(check))
    }else if (checkedActivity.length <=0 && checkedContinent.length > 0){
        return checkedContinent.some(check => dest.continent.includes(check))
    }else {
        console.log("def")
        return destinationsData
    }
  }
  )

 
  console.log("Checked activity", checkedActivity)
  console.log("Checked continent", checkedContinent)
  console.log("destination data", destinationsData)
  console.log("filteredData", filterData)


  const navigate = useNavigate()
    
      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Här kan du hantera vad som ska göras med de valda värdena, t.ex. skicka dem till en server
        console.log(checkedValue);

        navigate('/destinations', {state: {selectedValues: filterData}})

      };

  return (
    <section className='bg-gradient-overlay h-screen'>
        <article className='flex flex-col justify-center items-center pt-9'>
            <h1 className='font-abril text-50 text-white'>VayCay</h1>
            <h2 className='font-ms-madi text-35 text-white mt-[-20px] '>generator</h2>
        </article>
        <section className='flex flex-col justify-center items-center'>
            <div> {/* CONTAINER DIV */}
                <form onSubmit={handleSubmit}>
                    <h3 className='self-start text-white font-lexend font-bold text-20 my-6'>Activity</h3>
                
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'> {/* GRID DIV */}
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox1"
                            value="historical"
                            checked={checkedValue.includes("historical")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("historical") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Historical
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox2"
                            value="beach"
                            checked={checkedValue.includes("beach")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("beach") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Beach
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox3"
                            value="cultural"
                            checked={checkedValue.includes("cultural")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("cultural") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Cultural
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox4"
                            value="adventure"
                            checked={checkedValue.includes("adventure")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("adventure") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Adventure
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox5"
                            value="nature"
                            checked={checkedValue.includes("nature")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("nature") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Nature
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox6"
                            value="city"
                            checked={checkedValue.includes("city")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("city") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            City
                        </span>
                        </label>
                        
                    </div > {/* GRID DIV */}

                    <h3 className='self-start text-white font-lexend font-bold text-20 my-6'>Where</h3>

                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'> {/* GRID DIV */}
                        
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox8"
                            value="europe"
                            checked={checkedValue.includes("europe")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("europe") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Europe
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox9"
                            value="asia"
                            checked={checkedValue.includes("asia")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("asia") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Asia
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox10"
                            value="south-america"
                            checked={checkedValue.includes("south-america")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("south-america") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            S.America
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox11"
                            value="north-america"
                            checked={checkedValue.includes("north-america")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("north-america") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            N.America
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox12"
                            value="africa"
                            checked={checkedValue.includes("africa")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("africa") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Africa
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox13"
                            value="oceania"
                            checked={checkedValue.includes("oceania")}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedValue.includes("oceania") ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Oceania
                        </span>
                        </label>
                    </div>
                    
        <div className='flex justify-center items-center'>
        <button type="submit" className='bg-primary-100 font-lexend text-white font-bold py-2 px-4 rounded-full mt-9 hover:bg-primary-200 transition duration-300 ease-in-out transform'>Generate VayCay</button>
        </div>
                    
                </form>
            </div> {/* CONTAINER DIV */}
        </section>
    </section>
   

  )
}

export default Home



/* 
<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>

                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="radio1"
                            checked={checkedItems.radio1}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.radio1 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Anywhere
                        </span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="radio2"
                            checked={checkedItems.radio2}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.radio2 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Europe
                        </span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="radio3"
                            checked={checkedItems.radio3}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.radio3 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Asia
                        </span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="radio4"
                            checked={checkedItems.radio4}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.radio4 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            S. America
                        </span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="radio5"
                            checked={checkedItems.radio4}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.radio5 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            N. America
                        </span>
                    </label>
                    <label className="inline-flex items-center">
                        <input
                            type="radio"
                            name="radio6"
                            checked={checkedItems.radio4}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.radio6 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Africa
                        </span>
                    </label>

                    </div>

*/