import { useEffect, useState } from "react"
import { NavLink } from "react-router";


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        }

        // Listerner
        window.addEventListener('scroll', handleScroll, {passive : true});

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    }, [])

  return (
    <div className={`fixed w-full z-50 flex justify-between px-6 py-2.5   my-4 left-1/2 -translate-x-1/2 transition-[max-width,background,backdrop-filter] duration-500 rounded-2xl
        ${
            scrolled
            ? "max-w-5xl border border-gray-300 bg-white/70 backdrop-blur-xl shadow-md" 
            : "max-w-7xl"
        }
    `}>
      <div className="font-poppins text-2xl font-semibold text-blue-600 content-center">
        Taskify
      </div>

    <ul className="flex items-center">
        <li className="px-4">
            Features
        </li>
        <li className="px-4">
            Why Taskify
        </li>
        <li className="px-4">
            Testimonials
        </li>
    </ul>

    <NavLink to={'/login'} className=" flex items-center bg-blue-600 hover:bg-blue-700 cursor-pointer rounded-xl h-10 px-4 text-white">
        Get Started
    </NavLink>

    </div>
  )
}

export default Navbar
