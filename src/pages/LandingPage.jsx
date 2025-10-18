import { ArrowRight, CircleCheckBig, Rocket, Star, Zap } from "lucide-react"
import Navbar from "../components/Navbar"
import Testimoni from "../components/Testimoni"
import { NavLink } from "react-router"

const LandingPage = () => {
  return (
    <div className="font-inter">

        <Navbar />

        {/* Hero Section */}
        <section className="flex flex-col items-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100 justify-center text-center">

            <h1 className="text-5xl text-gray-800 font-extrabold max-w-2xl">
                Manage your taks smarter and faster with <span className="text-blue-600 font-poppins">Taskify</span>
            </h1>

            <p className="mt-4 text-gray-600 max-w-xl">
                A modern task management app designed for Gen Z - simple, clean and powerful.
            </p>

            <div className="mt-6">
                <NavLink to={'/login'} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg cursor-pointer">
                    Get Started - it's Free
                </NavLink>
            </div>
        </section> 

      {/* Feature */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Feature</h2>
        <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">

            <div className="p-6 rounded-xl border border-gray-300 shadow-lg flex flex-col items-center">
                <CircleCheckBig className="text-blue-600 w-14 h-14 mb-4"/>
                <h3 className="font-semibold text-lg text-gray-700">Simple Kanban</h3>
                <p className="text-gray-500 mt-2 text-center"> move tasks with one click, no drag-hassle</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-300 shadow-lg flex flex-col items-center">
                <CircleCheckBig className="text-blue-600 w-14 h-14 mb-4"/>
                <h3 className="font-semibold text-lg text-gray-700">AI Assistant</h3>
                <p className="text-gray-500 mt-2 text-center"> help to create task</p>
            </div>

            <div className="p-6 rounded-xl border border-gray-300 shadow-lg flex flex-col items-center">
                <CircleCheckBig className="text-blue-600 w-14 h-14 mb-4"/>
                <h3 className="font-semibold text-lg text-gray-700">Minimalist</h3>
                <p className="text-gray-500 mt-2 text-center"> design simple and no complex</p>
            </div>

        </div>
      </section>

      {/* why taskify */}
      <section className="bg-gray-50 py-16">
        <h2 className="text-3xl font-bold text-gray-700 mb-8 text-center">Why Taskify</h2>

        <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">


            <div className="p-6 bg-white rounded-xl border border-gray-300 shadow-lg flex flex-col items-center">
                <Rocket className="text-orange-400 w-14 h-14 mb-4"/>
                <h3 className="font-semibold text-lg text-gray-700">Focused on You</h3>
                <p className="text-gray-500 mt-2 text-center">a personal task manager, not an enterprise overload</p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-300 shadow-lg flex flex-col items-center">
                <Zap className="text-yellow-300 w-14 h-14 mb-4"/>
                <h3 className="font-semibold text-lg text-gray-700">Fast & Reliable</h3>
                <p className="text-gray-500 mt-2 text-center"> Lightning speed performance and uptime guaranteed</p>
            </div>

        </div>
      </section>
      {/* Testimoni */}
      <Testimoni/>


      {/* use taskify */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to boost your productivity?</h2>
        <p className="mb-8 text-lg opacity-90">Join Taskify today and take control of your tasks</p>
            <button className="px-4 py-2.5 text-lg font-medium text-black bg-white hover:bg-gray-100 flex mx-auto rounded-xl cursor-pointer">
                <p> Get Started Now it's Free → </p>
            </button>
      </section>
      {/* footer */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-gray-100">
        © {new Date().getFullYear()} Taskify. All rights reserved.
      </footer>
    </div>
  )
}

export default LandingPage
