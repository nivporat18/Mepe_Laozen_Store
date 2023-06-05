import axios from 'axios'
import React from 'react'
import {url} from "../../store/API"
import { useSelector } from 'react-redux'

function PayButton({cartItems}) {

  const user = useSelector((state)=>state.auth)

    const handleCheckout = ()=>{
         axios.post(`${url}/stripe/create-checkout-session`,{
          cartItems,
          userId:user._id
         }).then((res)=>{
         if(res.data.url){
          window.location.href = res.data.url
         }
         }).catch(error =>console.log(error.message))
    }

  return (
    <div>

        <button onClick={()=>handleCheckout()}>לתשלום</button>


    </div>
  )
}

export default PayButton