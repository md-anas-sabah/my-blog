import React from 'react'

const Blogs = ({image, title, createdAt, category_1, category_2}) => {
  return (
    <div className="flex flex-col group cursor-pointer mb-10 max-w-2xl ">
        <div className="relative w-full drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <img src={image} alt='im' className="object-fill h-64 lg:h-80 md:w-[30rem] object-left lg:object-center" />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-white flex flex-row justify-between ">
            <div>
                <p className="font-bold text-2xl w-52 lg:w-full truncate" >{title}</p>
                <p className="text-base">{createdAt}</p>
            </div>
            <div className='flex flex-col lg:flex-row px-2 mt-1 mb-1 gap-y-1 lg:gap-x-2'>
                <div className='bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold lg:h-10 lg:w-20'>
                    <p className='lg:mt-1'>{category_1}</p>
                </div>                 
                <div className='bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold md:h-10 md:w-20'>
                    <p className='lg:mt-1'>{category_2}</p>    
                </div>   
             </div>
        </div>
        </div>
    </div>
  )
}

export default Blogs