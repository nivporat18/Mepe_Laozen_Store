import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/AuthSlice'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'


function Login() {
    const dispatch = useDispatch()
    const auth = useSelector((state)=>state.auth)
    const navigate = useNavigate()

    console.log(auth)


    

    useEffect(()=>{
      if(auth._id){
        navigate("/home")
      }
    },[auth._id,navigate])

    const [user,setUser] = useState({
        name:"",
        email:"",
        password:""
    })


    const handleSubmit = (e)=>{
            e.preventDefault()

            dispatch(loginUser(user))


    }
  return (
    <>

    <form onSubmit={handleSubmit} className=" dark:bg-gray-900 mt-28 bg-gray-800 ">  

    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">
    
      <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                כניסה
              </h1>
            
                  <div>
                      <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">מייל</label>
                      <input type='email' name='' className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required onChange={(e)=>setUser({...user,email:e.target.value})}/>
                  </div>
                  <div>
                      <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">סיסמא</label>
                      <input type='password' name='' autoComplete="on"placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e)=>setUser({...user,password:e.target.value})}/>
                  </div>
                

                  <button type="submit" className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" >  
                    {auth.loginStatus === "ממתין" ? "שליחה" : "כניסה"}
                  </button>

                      {auth.loginStatus === "נדחה" ?  <p>{auth.loginError}</p> : null}



               
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  אין לך עדיין חשבון?
                  <Link to="/register">לחץ כאן</Link>
                  </p>
           
          </div>
      </div>
  </div>



  </form>
    </>
  )
}

export default Login