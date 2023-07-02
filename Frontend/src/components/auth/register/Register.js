import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../store/AuthSlice'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


function Register() {

    const dispatch = useDispatch()
    const auth = useSelector((state)=>state.auth)
    const navigate = useNavigate()

    useEffect(()=>{
      if(auth._id){
        navigate("/home")
      }
    },[auth._id, navigate])

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })


    const handleSubmit = (e)=>{
            e.preventDefault()
            dispatch(registerUser(user))
    }


  return (
    <>

        <section className="py-24 lg:py-28 bg-cover bg-center h-screen bg-[url('https://res.cloudinary.com/mepelaozen/image/upload/v1688295349/one%20project/store_ryfbgv.jpg')] overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-heading mb-4 text-6xl text-white tracking-tighter items-center justify-center flex">הרשמה</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center -m-3" action="#">
                        <div className="w-full md:w-1/2 p-3">
                            <label className="block">
                                <input
                                    className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                                    id="signUpInput1-1" type="text" placeholder="שם מלא" required onChange={(e)=>setUser({...user, name:e.target.value})}/>
                            </label>
                        </div>
                        <div className="w-full md:w-1/2 p-3">
                            <label className="block">
                                <input
                                    className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                                    id="signUpInput1-2" type="email" placeholder="מייל" required onChange={(e)=>setUser({...user, email:e.target.value})}/>
                            </label>
                        </div>
                        <div className="w-full md:w-1/2 p-3">
                            <label className="block">
                                <input
                                    className="p-4 w-full text-gray-700 tracking-tight bg-white placeholder-gray-700 outline-none border border-gray-600 rounded-lg focus:border-indigo-500 transition duration-200"
                                    id="signUpInput1-3" type="password" placeholder="סיסמה" required onChange={(e)=>setUser({...user, password:e.target.value})}/>
                            </label>
                        </div>


                        <div className="w-full p-3">

                            <button  type="submit" className="inline-block mb-7 px-5 py-4 w-full text-white text-center font-semibold tracking-tight bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:ring-4 focus:ring-indigo-300 transition duration-200">
                                                  {auth.registerStatus === "ממתין" ? "שליחה" : "הרשמה"}
                                                  </button>

                                                { auth.registerStatus ===  "נדחה" ?  <p>{auth.registerError}</p> : null}


                                                <p className="text-black font-bold hover:text-red-700 transition duration-200">
                                                    כבר יש לך חשבון?
                                                   <Link to="/login">לחץ כאן</Link>
                                                </p>

                        </div>
                    </form>
                </div>
            </div>
        </section>



              {/*<form onSubmit={handleSubmit} className="bg-black mt-28 ">*/}

      {/*  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">*/}
      {/*    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">*/}
      {/*        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">*/}
      {/*            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">*/}
      {/*              הרשמה*/}
      {/*            </h1>*/}


      {/*               <div>*/}
      {/*                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">שם מלא</label>*/}
      {/*                    <input type='text' name='' placeholder='שם מלא ' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e)=>setUser({...user, name:e.target.value})}/>*/}
      {/*                </div>*/}

      {/*                <div>*/}
      {/*                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">מייל</label>*/}
      {/*                    <input type='email' name='' placeholder="name@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required onChange={(e)=>setUser({...user, email:e.target.value})}/>*/}
      {/*                </div>*/}
      {/*                <div>*/}
      {/*                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">סיסמא</label>*/}
      {/*                    <input type='password' name='' autoComplete="on"placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e)=>setUser({...user, password:e.target.value})}/>*/}
      {/*                </div>*/}

      {/*                 <button  type="submit" className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">*/}
      {/*                  {auth.registerStatus === "ממתין" ? "שליחה" : "הרשמה"}*/}
      {/*                  </button>*/}

      {/*                { auth.registerStatus ===  "נדחה" ?  <p>{auth.registerError}</p> : null}*/}


      {/*                <p className="text-sm font-light text-gray-500 dark:text-gray-400">*/}
      {/*                   כבר יש לך חשבון?*/}
      {/*                   <Link to="/login">לחץ כאן</Link>*/}
      {/*                </p>*/}

      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}

      {/*</form>*/}

    </>
  )
}

export default Register