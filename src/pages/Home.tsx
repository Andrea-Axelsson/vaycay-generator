import '../index.css'
import React, { useState, ChangeEvent, FormEvent  } from 'react'
import {Link} from 'react-router-dom'

interface CheckedItems {
    checkbox1: boolean;
    checkbox2: boolean;
    checkbox3: boolean;
    checkbox4: boolean;
    checkbox5: boolean;
    checkbox6: boolean;
    radio1: boolean;
    radio2: boolean;
    radio3: boolean;
    radio4: boolean;
}

const Home: React.FC = () => {

    const [checkedItems, setCheckedItems] = useState<CheckedItems>({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        checkbox6: false,
        radio1: false,
        radio2: false,
        radio3: false,
        radio4: false,
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, checked, type } = event.target;
    if (type === 'radio') {
        setCheckedItems({
            ...checkedItems,
            radio1: false,
            radio2: false,
            radio3: false,
            radio4: false,
            [name]: checked,
      });
    } else {
      setCheckedItems((prevState) => ({
        ...prevState,
        [name]: checked,
      }));
    }
  };
    
      const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Här kan du hantera vad som ska göras med de valda värdena, t.ex. skicka dem till en server
        console.log(checkedItems);
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
                    <h3 className='self-start text-white font-lexend font-bold text-20 my-6'>Where</h3>
                
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'> {/* GRID DIV */}
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox1"
                            checked={checkedItems.checkbox1}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.checkbox1 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Anywhere
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox2"
                            checked={checkedItems.checkbox2}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.checkbox2 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Anywhere
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox3"
                            checked={checkedItems.checkbox3}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.checkbox3 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Anywhere
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox4"
                            checked={checkedItems.checkbox4}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.checkbox4 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Anywhere
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox5"
                            checked={checkedItems.checkbox5}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.checkbox5 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Anywhere
                        </span>
                        </label>
                        <label className="inline-flex items-center">
                        <input
                            type="checkbox"
                            name="checkbox6"
                            checked={checkedItems.checkbox6}
                            onChange={handleChange}
                            className="hidden"
                        />
                        <span className={`font-lexend py-2 px-4 rounded-full cursor-pointer w-32 text-center transition duration-300 ease-in-out transform
                        ${checkedItems.checkbox6 ? 'bg-secondary-200 text-secondary-100 border-solid border-2 border-secondary-100 hover:bg-secondary-400' : 'bg-secondary-100 text-secondary-200 hover:bg-secondary-300'}
                        `}>
                            Anywhere
                        </span>
                        </label>
                        
                    </div > {/* GRID DIV */}

                    <h3 className='self-start text-white font-lexend font-bold text-20 my-6'>When</h3>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>{/* GRID DIV */}

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
                            Anytime
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
                            Weekend
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
                            1 Week
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
                            2 Weeks
                        </span>
                    </label>

                    </div>
        <div className='flex justify-center items-center'>
        <Link to={"destinations"}>
        <button type="submit" className='bg-primary-100 font-lexend text-white font-bold py-2 px-4 rounded-full mt-9 hover:bg-primary-200 transition duration-300 ease-in-out transform'>Generate VayCay</button>
        </Link>    
        
        </div>
                    
                </form>
            </div> {/* CONTAINER DIV */}
        </section>
    </section>
   

  )
}

export default Home