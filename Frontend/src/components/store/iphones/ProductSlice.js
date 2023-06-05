import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const iphone11Fetch =  createAsyncThunk(
    "iphone11/iphone11Fetch",
   async ()=>{
        const response = await axios.get(`${url}/iphone11`)
        return response?.data
    }
)


export const iphone11Create =  createAsyncThunk(
    "iphone11/iphone11Create",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/iphone11`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const productsSlice = createSlice({
    name:"iphone11",
    initialState,
    reducers:{},
    extraReducers:{
        [iphone11Fetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [iphone11Fetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [iphone11Fetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [iphone11Create.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [iphone11Create.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("Iphone 11 Created")
           
        },

        [iphone11Create.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default productsSlice.reducer