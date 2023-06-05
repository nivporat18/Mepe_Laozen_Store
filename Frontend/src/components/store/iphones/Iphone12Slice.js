import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const iphone12Fetch =  createAsyncThunk(
    "iphone12/iphone12Fetch",
   async ()=>{
        const response = await axios.get(`${url}/iphone12`)
        return response?.data
    }
)


export const iphone12Create =  createAsyncThunk(
    "iphone12/iphone12Create",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/iphone12`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const iphone12Slice = createSlice({
    name:"iphone12",
    initialState,
    reducers:{},
    extraReducers:{
        [iphone12Fetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [iphone12Fetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [iphone12Fetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [iphone12Create.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [iphone12Create.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("Iphone 12 Created")
           
        },

        [iphone12Create.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default iphone12Slice.reducer