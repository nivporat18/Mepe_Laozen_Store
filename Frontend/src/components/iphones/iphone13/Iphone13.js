import React from 'react'
import "./Iphone13.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/CartSlice';
import { useNavigate } from "react-router";


function Iphone13() {

  const {items:data,status} = useSelector((state)=>state.iphone13)
  
  const dispatch = useDispatch()
    const navigate = useNavigate()
    
    
    const handleAddCart = (product) => {
      dispatch(addToCart(product))
      navigate("/cart")
    };

  return (

    <div className='iphone-container'>
      
    {status === "success" ? (
    <>
    
   <h2>Iphone 13</h2>
<div className='products'>
{data?.map((product)=>
  <div className='product' key={product._id}>
        <h3>{product.name}</h3>
            <img src={product.image.url} alt='Iphone'/>

            <div className='details'>
                  <span>{product.desc}</span>
                  <span className='price'>₪{product.price}</span>
            </div>

           <button onClick={()=>handleAddCart(product)} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center">
            Add to Cart
            <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2"fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
            </button>


</div>
)}
</div> 
    
</>): status === "pending" ? (
  <>
    <p>Loading.....</p>
  </>
) : <p>No Connection</p>}
  
    

     

          
          


     

  </div>

)}

export default Iphone13