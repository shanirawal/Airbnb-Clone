import { Heart } from 'lucide-react'
import React from 'react'

const Card = ({title , price , img}) => {
  return (
    <div className='font-inter  relative cursor-pointer w-full '>
      <img src={img} alt="" className='" object-cover  h-[269px] min-w-[284px]
       lg:h-[170px]    rounded-2xl lg:min-w-[180px] md:min-w-[209px] md:h-[199px] '
      
      />
      <p className='mt-1 font-bold text-xs '>{title}</p>
      <p className='text-[10px] text-gray-500'>{price}</p>

      <div className='bg-white/70 py-1 px-2 rounded-xl text-xs font-semibold absolute top-2 left-3 '>
        Guest favourite
      </div>

      <div className="absolute top-2 right-2 hover:scale-110 transition-transform duration-200 hover:-translate-y-[1px]">
            <Heart
                className="text-black/70 w-6 h-6 absolute"
                fill="currentColor"
                stroke="none"
            />
            <Heart
                className="text-white w-6 h-6 relative"
            />
        </div>

    </div>
  )
}

export default Card
