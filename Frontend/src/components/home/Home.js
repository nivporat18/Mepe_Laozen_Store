import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import mac from "../images/maccomputer.png"
import watch from "../images/watchs.png"
import iphone from "../images/iphones.png"
import airpods from "../images/airpods.png"
import ipad from "../images/ipads.png"
import cases from "../images/cases.png"


function Home() {
  return (

   
    <div className="flex justify-center items-center bg-gray-800 mt-8">
        <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
            <div className="flex flex-col jusitfy-center items-center space-y-10 ">
                
             
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full ">
                   
                    <div className="relative group flex justify-center items-center h-full w-full  bg-gradient-to-r from-gray-100">
                        <img className="object-center object-cover h-auto w-full " src={iphone} alt="Iphone" />
                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"><Link to="/iphone">Iphone</Link></button>
                        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                    </div>
                
                    <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                        <div className="relative group flex justify-center items-center h-full w-full bg-gradient-to-r from-gray-100">
                            <img className="object-center object-cover h-auto w-full" src={mac} alt="Mac" />
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"><Link to="/mac">Mac</Link></button>
                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                        </div>
                
                        <div className="relative group flex justify-center items-center h-full w-full bg-gradient-to-r from-gray-100">
                            <img className="object-center object-cover h-auto w-full" src={watch} alt="Apple Watch" />
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"><Link to="/watch">Apple Watch</Link></button>
                            <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                        </div>
                    </div>
                
                    <div className="relative group justify-center items-center h-full w-full hidden lg:flex bg-gradient-to-l from-gray-300">
                        <img className="object-center object-cover h-auto w-full" src={airpods} alt="AirPods" />
                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"><Link to="/airpods">AirPods</Link></button>
                        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                    </div>
                

                
             
                </div>

                <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:flex  bg-gradient-to-r from-gray-100">
                    <img className="object-center object-cover h-auto w-full" src={ipad} alt="Ipad" />
                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"><Link to="/ipad">Ipad</Link></button>
                        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                    </div>



                <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:flex bg-gradient-to-r from-gray-100">
                <img className="object-center object-cover h-auto w-full" src={cases} alt="Cases" />
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white"> <Link to="/case">אביזרים</Link></button>
                 <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                    </div>
                 
            </div>

            
        </div>
    </div>


  )
}

export default Home



