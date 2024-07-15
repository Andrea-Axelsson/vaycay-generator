import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, {ReactNode, useState} from 'react'
import '../index.css'

interface CarouselProps{
    children : ReactNode
}

const Carousel: React.FC<CarouselProps> = ({children}) => {
    
    const slides = React.Children.toArray(children);
    const [curr, setCurr] = useState<number>(0)

    const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1)
    const next = () => setCurr(curr === slides.length - 1  ? 0 : curr + 1)

  return (
    <div className='overflow-hidden relative w-auto h-80 rounded-md'>
        <div 
        className='flex transition-transform ease-out duration-500'
        style={{transform: `translateX(-${curr*100}%)`}}
        >{slides}</div>
        <div className='absolute inset-0 flex items-center justify-between p-4'>
            <button onClick={prev} className='p-1 rounded-full shadow bg-white bg-opacity-80 text-gray-800 hover:bg-white'>
                <ChevronLeft size={20}/>
            </button>
            <button onClick={next} className='p-1 rounded-full shadow bg-white bg-opacity-80 text-gray-800 hover:bg-white'>
                <ChevronRight size={20}/>
            </button>
        </div>
        <div className='absolute bottom-4 right-0 left-0'>
            <div className='flex items-center justify-center gap-2'>
                {slides.map((_, i) => (
                    <div className={`
                        transition-all w-1 h-1 bg-white rounded-full
                        ${curr === i ? "p-1" : "bg-opacity-50"}
                        `}/>
                ))}
            </div>
        </div>

    </div>
  )
}

export default Carousel
