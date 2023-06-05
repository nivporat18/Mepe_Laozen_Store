import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/CartSlice';
import { useNavigate } from "react-router";

function AirPods3() {

  const {items:data,status} = useSelector((state)=>state.airPods3)
  
  
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
    
   <h2>AirPods 3</h2>
<div className='products'>
{data?.map((product)=>
  <div className='product' key={product._id}>
        <h3>{product.name}</h3>
            <img src={product.image.url} alt='Iphone'/>

            <div className='details'>
                  <span>{product.desc}</span>
                  <span className='price'>₪{product.price}</span>
            </div>
            <button onClick={()=>handleAddCart(product)}>Add To Cart</button>

</div>
)}
</div> 
    
</>): status === "pending" ? (
  <>
    <p>Loading.....</p>
  </>
) : <p>No Connection</p>}


     

  </div>
  )
}

export default AirPods3