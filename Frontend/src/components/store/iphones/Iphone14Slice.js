import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const iphone14Fetch =  createAsyncThunk(
    "iphone14/iphone14Fetch",
   async ()=>{
        const response = await axios.get(`${url}/iphone14`)
        return response?.data
    }
)


export const iphone14Create =  createAsyncThunk(
    "iphone14/iphone14Create",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/iphone14`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const iphone14Slice = createSlice({
    name:"iphone14",
    initialState,
    reducers:{},
    extraReducers:{
        [iphone14Fetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [iphone14Fetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [iphone14Fetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [iphone14Create.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [iphone14Create.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("Iphone 14 Created")
           
        },

        [iphone14Create.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default iphone14Slice.reducer