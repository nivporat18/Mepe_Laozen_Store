import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const appleWatch6Fetch =  createAsyncThunk(
    "applewatch6/applewatch6Fetch",
   async ()=>{
        const response = await axios.get(`${url}/applewatch6`)
        return response?.data
    }
)


export const appleWatch6Create =  createAsyncThunk(
    "applewatch6/applewatch6Create",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/applewatch6`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const appleWatch6Slice = createSlice({
    name:"applewatch6",
    initialState,
    reducers:{},
    extraReducers:{
        [appleWatch6Fetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [appleWatch6Fetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [appleWatch6Fetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [appleWatch6Create.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [appleWatch6Create.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("apple watch 6 Created")
           
        },

        [appleWatch6Create.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default appleWatch6Slice.reducer