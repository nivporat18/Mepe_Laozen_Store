import React from 'react'
import "./Mac.css"
import { Link } from 'react-router-dom'

function Mac() {
  return (
  
	<div className="min-h-screen flex justify-center items-center py-28  bg-gray-800 ">
  <div className="md:px-4 md:grid md:grid-cols-2  lg:grid-cols-4 gap-6 space-y-4 md:space-y-0 ">
  <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-50 ">
    <div className="relative ">
    <img className="w-full rounded-xl " src="https://res.cloudinary.com/mepelaozen/image/upload/v1686056933/mepelaozen/macAirBackground_rloeom.avif" alt="Macbook Air" />
    </div>
    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center ">Macbook Air</h1>
    <div className="my-4">
    <div className="flex space-x-1 items-center ">
    <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
  <Link to="/mac/macbookair">מידע נוסף</Link>
  </button>
    </div>

    </div>
  </div>


  <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 h-full">
    <div className="relative ">
    <img className="w-full rounded-xl" src="https://res.cloudinary.com/mepelaozen/image/upload/v1686056884/mepelaozen/MacPro/macProBackground_ndip5r.avif" alt="Macbook Pro" />
    </div>
    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center ">Macbook Pro</h1>
    <div className="my-4">
    <div className="flex space-x-1 items-center ">
    <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
  <Link to="/mac/macbookpro">מידע נוסף</Link>
  </button>
    </div>

    </div>
  </div>




  <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl  shadow-lg transform hover:scale-105 transition duration-500">
    <div className="relative">
    <img className="w-full rounded-xl" src="https://res.cloudinary.com/mepelaozen/image/upload/v1686056896/mepelaozen/MacMini/macMiniBackground_phiw3p.webp" alt="Mac Mini" />
    </div>
    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center">Mac Mini</h1>
    <div className="my-4">
    <div className="flex space-x-1 items-center">
    <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
  <Link to="/mac/macmini">מידע נוסף</Link>
  </button>
    </div>

    </div>
  </div>




  <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    <div className="relative">
    <img className="w-full rounded-xl " src="https://res.cloudinary.com/mepelaozen/image/upload/v1686051739/mepelaozen/iMac/background_ryb2pr.jpg" alt="Imac" />
    </div>
    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center">Imac</h1>
    <div className="my-4">
    <div className="flex space-x-1 items-center">
          <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
          <Link to="/mac/imac">מידע נוסף</Link>
  </button>
    </div>

    </div>
  </div>






  </div>
</div>



  )
}

export default Mac