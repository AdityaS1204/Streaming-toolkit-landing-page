import logo from '../assets/logo.png'
import { useState } from "react"

const Navbar = () => {
  const [isopen, setIsopen] = useState(false)

  const toggleMenu = () => {
    setIsopen(!isopen)
  }


  return (
    <nav className="fixed top-4 right-0 left-0 m-2 z-50">
      <div className="bg-black/60 text-neutral-600 mx-auto max-w-7xl px-4 flex justify-between items-center py-3 backdrop-blur-md rounded-xl border border-neutral-800">
        <img src={logo} alt="logo" width={120} height={24} />
        <div className="hidden md:flex space-x-6">
          <a href="#works" className='hover:text-neutral-200'>
            How it works
          </a>
          <a href="#works" className='hover:text-neutral-200'>
            Pricing
          </a>
          <a href="#works" className='hover:text-neutral-200'>
            Testimonials
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className='hover:text-neutral-200'>
            Login
          </a>
          <a href="#" className='hover:text-neutral-200 border border-neutral-700 text-white py-2 px-4 rounded-lg hover:bg-neutral-700 transition'>
            Get a Demo
          </a>
          <a href="#" className='hover:text-neutral-200 bg-blue-600 hover:bg-blue-500 transition rounded-lg'>
  Start Free Trial
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar