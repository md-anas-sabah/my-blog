import Logo from "../assets/Logo.png";

const Header = () => {
    return (
      <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
          <div className="flex items-center space-x-2 md:text-2xl md:tracking-wide">
              <a href="/">
                 <img src={Logo} alt="logo" className="rounded-full  h-14 w-14 md:h-20 md:w-20" /> 
              </a>
              <h1 className="font-zhi text-base md:text-2xl">Md Anas Sabah</h1>
          </div>
          <div>
          <a href="https://www.linkedin.com/in/md-anas-sabah/" className="px-5 py-3 text-sm md:text-base bg-gray-900 flex items-center rounded-full text-center text-[#F7AB0A]">
              Checkout My LinkedIn Profile
          </a>
          </div>
      </header>
    )
  }
  
  export default Header