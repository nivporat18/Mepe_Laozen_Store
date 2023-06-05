import React, { useState } from 'react'
import "./CreateProduct.css"
import { StyleFrom } from '../../style/StyleForm'
import { useDispatch } from 'react-redux'
import { iphone11Create } from '../../store/iphones/ProductSlice'

function CreateProduct() {
  const [productImg,setProductImg] = useState("")
  const [name,setName] = useState("")
  const [brand,setBrand] = useState("")
  const [price,setPrice] = useState("")
  const [desc,setDesc] = useState("")

  const dispatch = useDispatch()


  console.log(productImg)

  const handleProductImageUpload = (e)=>{
    const file = e.target.files[0];
    transformFile(file)
  }

  const transformFile = (file)=>{
      const reader = new FileReader()

      if(reader){
        reader.readAsDataURL(file)
        reader.onloadend = ()=>{
          setProductImg(reader.result);
        }
      }else{
        setProductImg("")
      }
  }


  const handleSubmit =(e)=>{
      e.preventDefault()
      dispatch(iphone11Create({
        name,
        brand,
        price,
        desc,
        image:productImg
      }))
  }

  return (
    <div className='createProduct'>
        <StyleFrom onSubmit={handleSubmit}>
        <h3>Create a Product</h3>
        <input type='file' accept='image/' onChange={handleProductImageUpload} required/>
          <select onChange={(e)=>setBrand(e.target.value)} required>
              <option value="">Select Brand</option>
              <option value="iphone">Iphone</option>
              <option value="samsung">Samsung</option>
              <option value="xiomi">Xiomi</option>
              <option value="other">Other</option>
          </select>
        <input  type='text' placeholder='name' onChange={(e)=> setName(e.target.value)} required/>
        <input  type='text' placeholder='price' onChange={(e)=> setPrice(e.target.value)} required/>
        <input  type='text' placeholder='Short Description' onChange={(e)=> setDesc(e.target.value)} required/>

        <button type="submit">Submit</button>
        </StyleFrom>

        <div className='imagePreview'>
            {productImg ? <>
                <img src={productImg} alt='product_image'/>
            </> 
              :
               <p>Image preview will appear here!</p>}
        </div>
      </div>
  )
}

export default CreateProduct