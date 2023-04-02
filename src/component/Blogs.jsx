import React from 'react'

const Blogs = ({image, title, createdAt, category_1, category_2}) => {
  return (
    <div className="flex flex-col group cursor-pointer mb-10">
        <div className="relative w-full drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <img src={image} alt='im' className="object-fill h-80 object-left lg:object-center" />
        <div className="absolute bottom-0 w-full bg-black bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg text-white flex flex-row justify-between ">
            <div>
                <p className="font-bold text-2xl" >{title}</p>
                <p className="text-base">{createdAt}</p>
            </div>
            <div className='flex flex-col md:flex-row gap-y-1 px-2 mt-1 md:gap-x-2'>
                <div className='bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                    <p>{category_1}</p>
                </div>                 
                <div className='bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold'>
                    <p>{category_2}</p>    
                </div>   
             </div>
        </div>
        </div>
    </div>
  )
}

export default Blogs