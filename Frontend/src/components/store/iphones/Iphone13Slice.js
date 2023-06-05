import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const iphone13Fetch =  createAsyncThunk(
    "iphone13/iphone13Fetch",
   async ()=>{
        const response = await axios.get(`${url}/iphone13`)
        return response?.data
    }
)


export const iphone13Create =  createAsyncThunk(
    "iphone13/iphone13Create",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/iphone13`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const iphone13Slice = createSlice({
    name:"iphone13",
    initialState,
    reducers:{},
    extraReducers:{
        [iphone13Fetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [iphone13Fetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [iphone13Fetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [iphone13Create.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [iphone13Create.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("Iphone 13 Created")
           
        },

        [iphone13Create.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default iphone13Slice.reducer