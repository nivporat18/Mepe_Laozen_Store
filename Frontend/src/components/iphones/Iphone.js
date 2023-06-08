import React from 'react'
import "./Iphone.css"
import iphone11 from "../images/iphone11.jpeg"
import iphone12 from "../images/iphone12.jpeg"
import iphone13 from "../images/iphone13.png"
import iphone14 from "../images/iphone14.jpeg"
import { Link } from 'react-router-dom'




function Iphone() {
  return (


	<div className="min-h-screen bg-gray-800 flex justify-center items-center py-28">
	  <div className="md:px-20 md:grid md:grid-cols-2 lg:grid-cols-4 gap-10 space-y-4 md:space-y-0 ">
		
		<div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 ">
		  <div className="relative ">
			<img className="w-full rounded-xl" src={iphone11} alt="Iphone 11" />
		  </div>
		  <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center ">Iphone 11</h1>
		  <div className="my-4">
			<div className="flex space-x-1 items-center ">
			<button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
		<Link to="/iphone/iphone11">מידע נוסף</Link>
		</button>
			</div>
	
		  </div>
		</div>
	

		<div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 ">
		  <div className="relative ">
			<img className="w-full rounded-xl" src={iphone12} alt="Iphone 12" />
		  </div>
		  <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center ">Iphone 12</h1>
		  <div className="my-4">
			<div className="flex space-x-1 items-center ">
			<button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
		<Link to="/iphone/iphone12">מידע נוסף</Link>
		</button>
			</div>
	
		  </div>
		</div>
	



		<div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
		  <div className="relative">
			<img className="w-full rounded-xl" src={iphone13} alt="Iphone 13" />
		  </div>
		  <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center">Iphone 13</h1>
		  <div className="my-4">
			<div className="flex space-x-1 items-center">
			<button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
		<Link to="/iphone/iphone13">מידע נוסף</Link>
		</button>
			</div>

		  </div>
		</div>
	



		<div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
		  <div className="relative">
			<img className="w-full rounded-xl" src={iphone14} alt="Iphone 14" />
		  </div>
		  <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer flex justify-center items-center">Iphone 14</h1>
		  <div className="my-4">
			<div className="flex space-x-1 items-center">
						<button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
						<Link to="/iphone/iphone14">מידע נוסף</Link>
		</button>
			</div>
	
		  </div>
		</div>
	



	
	
	  </div>
	</div>
    
  )
}

export default Iphone



