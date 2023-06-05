import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const appleWatch7Fetch =  createAsyncThunk(
    "applewatch7/applewatch7Fetch",
   async ()=>{
        const response = await axios.get(`${url}/applewatch7`)
        return response?.data
    }
)


export const appleWatch7Create =  createAsyncThunk(
    "applewatch7/applewatch7Create",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/applewatch7`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const appleWatch7Slice = createSlice({
    name:"applewatch7",
    initialState,
    reducers:{},
    extraReducers:{
        [appleWatch7Fetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [appleWatch7Fetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [appleWatch7Fetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [appleWatch7Create.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [appleWatch7Create.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("apple watch 7 Created")
           
        },

        [appleWatch7Create.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default appleWatch7Slice.reducer