import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/CartSlice';
import { useNavigate } from "react-router";

function MacMini() {
 
const {items:data,status} = useSelector((state)=>state.MacMini)
  
const dispatch = useDispatch()
  const navigate = useNavigate()
  
  
  const handleAddCart = (product) => {
    dispatch(addToCart(product))
    navigate("/cart")
  };


return (

  <div className="">
    
  {status === "success" ? (
  <>
  
 <h2>Mac Mini</h2>
<div className='products'>
{data?.map((product)=>
  <div className="group relative block overflow-hidden" key={product._id}>
 

  <img src={product.image.url} alt={product.name}  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"/>

  <div className="relative border border-gray-100 bg-white p-6">
  <h3 className="mt-4 text-lg font-medium text-gray-900">{product.name}</h3>
   
   
    <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">{product.desc}</span>

  

    <p className="mt-1.5 text-sm text-gray-700">₪{product.price}</p>

    <form className="mt-4">
      <button  onClick={()=>handleAddCart(product)} className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">Add to Cart</button>
    </form>
  </div>
</div>
)}
</div> 
  
</>): status === "pending" ? (
<>
<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role={status}>
  <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
</div>
</>
) : <p>No Connection</p>}

 

</div>
  )
}

export default MacMini