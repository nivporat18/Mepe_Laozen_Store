import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navigation.css'
import logoHome from "../images/mepelaozen.png"
import whatsapp from "../images/whatsapp.png"
import facebook from "../images/facebook.png"
import instagram from "../images/instagram.png"
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../store/AuthSlice'
import { toast } from 'react-toastify'


function Navigation() {

  const dispatch = useDispatch()
  
  const navigate = useNavigate()

  const [isOpen,setIsOpen] = useState(false)

  const toggleNav = () =>{
    setIsOpen(!isOpen)
  }
  

  const {cartTotalQuantity} = useSelector((state)=>state.cart)
  const auth = useSelector((state)=>state.auth)
  
  return (

<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
 
  

    <div className='flex'>

    {auth._id ? 
<div >

<div>
    {auth.isAdmin ?  <Link to="admin/summary" >מנהל</Link> : null}
 
</div>
<div

 onClick={()=>{
  dispatch(logoutUser(null));
  navigate('/home') 
  toast.warning("יציאה!",{position:"bottom-center"})
}}
>
<button>
<ion-icon size="large" name="log-out-outline">יציאה</ion-icon>
</button> 
  
  </div> 
</div>
:
<div className='hidden md:flex items-center'>
<Link to="/login" className='m-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'  >התחברות</Link>
<Link to="/register"  className='m-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>הרשמה</Link>
</div>

}

    
  


   

      
  
  <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto ">

    <div>
    <Link to="/home" ><img src={logoHome} alt="לוגו למסך הבית" width="150px"/></Link>

    </div>


   
      
    
    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      
    <ul class=" flex md:p-0 items-center font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
     
      <Link to="/mac" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mac</Link>
       
      <Link to="/watch" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Watch</Link>

      <Link to="/ipad" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ipad</Link>

        <Link to="/iphone" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Iphone</Link>

        <Link to="/airpods" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">AirPods</Link>

        <Link to="/samsung" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Samsung</Link>

        <Link to="/case" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">אביזרים</Link>

          < Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
             <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
             </svg> 
             <span>{cartTotalQuantity}</span>
            </Link>     
     
    </ul>
    
 


    </div>
    
  </div>
   <div className='flex flex-row'>
    <a className='whatsapp' href='https://wa.me/0543387990?text=%D7%94%D7%99%D7%99%2C%20%D7%9E%D7%99%D7%93%20%D7%9E%D7%AA%D7%A4%D7%A0%D7%99%D7%9D%20%D7%9C%D7%AA%D7%AA%20%D7%9E%D7%A2%D7%A0%D7%94' target="_blank" rel="noreferrer"><img src={whatsapp} alt="WhatsApp" width="30px"/></a>
    <a className='facebook' href='https://www.facebook.com/bydanielalgai' target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook" width="30px"/></a>
    <a className='instagram' href='https://www.instagram.com/mepe_le_ozen/?igshid=YmMyMTA2M2Y%3D' target="_blank" rel="noreferrer"><img src={instagram} alt="instagram" width="30px"/></a>
   </div>






 






  {/* {Mobile} */}
  <div class="flex md:order-2 md:hidden" onClick={toggleNav}>
 
  {isOpen ? <ion-icon size="large" name="close"></ion-icon> : <ion-icon size="large" name="menu"></ion-icon>}  
  </div>
  </div>
    {isOpen && (


  <div class="items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
 



<ul class=" flex flex-col md:p-0 items-center font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">

{auth._id ? 
<div >

<div>
    {auth.isAdmin ?  <Link to="admin/summary" >מנהל</Link> : null}
 
</div>
<div

 onClick={()=>{
  dispatch(logoutUser(null));
  navigate('/home') 
  toast.warning("יציאה!",{position:"bottom-center"})
}}
>
<button>
<ion-icon size="large" name="log-out-outline">יציאה</ion-icon>
</button> 
  
  </div> 
</div>
:
<div className='ml-48 mt-2'>
<Link to="/login" className='m-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'  >התחברות</Link>
<Link to="/register"  className='m-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>הרשמה</Link>
</div>

}


     
     <Link to="/mac" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mac</Link>
      
     <Link to="/watch" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Watch</Link>

     <Link to="/ipad" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Ipad</Link>

       <Link to="/iphone" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Iphone</Link>

       <Link to="/airpods" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">AirPods</Link>

       <Link to="/samsung" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Samsung</Link>

       <Link to="/case" class="block m-3 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">אביזרים</Link>

         < Link to="/cart"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-handbag-fill" viewBox="0 0 16 16">
            <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z"/>
            </svg> 
            <span>{cartTotalQuantity}</span>
           </Link>     
    
   </ul>

  </div>


  )}

</nav>




  )
}

export default Navigation


