import React from 'react'
import "./Ipad.css"
import { Link } from 'react-router-dom'


function Ipad() {
  return (
    <div className="min-h-screen bg-gray-800 to-yellow-00 flex justify-center items-center py-20">
	  <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 space-y-4 md:space-y-0 ">
		<div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 bg-gradient-to-r from-gray-900 to-yellow-00">
		  <div className="relative ">
			<img className="w-full rounded-xl" src="" alt="Ipad Pro" />
		  </div>
		  <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center ">Ipad Pro</h1>
		  <div className="my-4">
			<div className="flex space-x-1 items-center ">
			<button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
		<Link to="/ipad/ipadpro">מידע נוסף</Link>
		</button>
			</div>
	
		  </div>
		</div>
	

		<div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 ">
		  <div className="relative ">
			<img className="w-full rounded-xl" src="" alt="Ipad Air" />
		  </div>
		  <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center ">Ipad Air</h1>
		  <div className="my-4">
			<div className="flex space-x-1 items-center ">
			<button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
		<Link to="/ipad/ipadair">מידע נוסף</Link>
		</button>
			</div>
	
		  </div>
		</div>
	



		<div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
		  <div className="relative">
			<img className="w-full rounded-xl" src="" alt="Ipad Mini" />
		  </div>
		  <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center">Ipad Mini</h1>
		  <div className="my-4">
			<div className="flex space-x-1 items-center">
			<button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
		<Link to="/ipad/ipadmini">מידע נוסף</Link>
		</button>
			</div>

		  </div>
		</div>

	
	
	  </div>
	</div>
  )
}

export default Ipad