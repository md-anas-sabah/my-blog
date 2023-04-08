const Banner = () => {
    return (
      <div  className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 ">
           <div>
              <h1 className="text-7xl">Sabah's Daily Blog</h1>
              <h2 className="mt-5 md:mt-0">
                  Step into my world of  <span className="underline decoration-4 decoration-[#F7AB0A]">Coding</span>  and <span className="underline decoration-4 decoration-[#F7AB0A]">Creativity</span>
              </h2>
           </div>
           <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
           A passionate CSE student with a love for coding, exploring new technologies, collaborating with others, and creating innovative solutions.
           </p>
      </div>
    )
  }
  
  export default Banner;