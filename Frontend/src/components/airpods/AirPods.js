import React from 'react'
import "./AirPods.css"
import { Link } from 'react-router-dom'


function AirPods() {
  return (

      
	<div className="min-h-screen   bg-gray-800 to-yellow-00 flex justify-center items-center py-20">
  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-4 md:space-y-0 ">
  <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500  bg-gradient-to-r from-gray-900 to-yellow-00">
    <div className="relative">
    <img className="w-full rounded-xl" src="" alt="AirPods Pro Max"/>
    </div>
    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center">AirPods Pro Max</h1>
    <div className="my-4">
    <div className="flex space-x-1 items-center">
          <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
          <Link to="/airpods/airpodspromax">מידע נוסף</Link>
  </button>
    </div>

    </div>
  </div>


 
  <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    <div className="relative">
    <img className="w-full rounded-xl" src="" alt="AirPods Pro" />
    </div>
    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center">AirPods Pro</h1>
    <div className="my-4">
    <div className="flex space-x-1 items-center">
          <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
          <Link to="/airpods/airpodspro">מידע נוסף</Link>
  </button>
    </div>

    </div>
  </div>





  <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    <div className="relative">
    <img className="w-full rounded-xl" src="" alt="AirPods 2" />
    </div>
    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center"> AirPods 2</h1>
    <div className="my-4">
    <div className="flex space-x-1 items-center">
          <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
          <Link to="/airpods/airpods2">מידע נוסף</Link>
  </button>
    </div>

    </div>
  </div>





  <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
    <div className="relative">
    <img className="w-full rounded-xl" src="" alt="AirPods 3" />
    </div>
    <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center">AirPods 3</h1>
    <div className="my-4">
    <div className="flex space-x-1 items-center">
          <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
          <Link to="/airpods/airpods3">מידע נוסף</Link>
  </button>
    </div>

    </div>
  </div>






  </div>
</div>

      
  )
}

export default AirPods