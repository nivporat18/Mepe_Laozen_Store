import React from 'react'
import { Outlet, useNavigate } from 'react-router'

function Products() {
  const navigate = useNavigate()
  return (
    <>

    <div className='AdminHeaders'>
    <button className='PrimaryButton' onClick={()=>navigate("/admin/products/create-product")}>
     Create
    </button>
    <Outlet/>

    </div>

    </>
  )
}

export default Products