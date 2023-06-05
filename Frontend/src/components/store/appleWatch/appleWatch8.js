import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const appleWatch8Fetch =  createAsyncThunk(
    "applewatch8/applewatch8Fetch",
   async ()=>{
        const response = await axios.get(`${url}/applewatch8`)
        return response?.data
    }
)


export const appleWatch8Create =  createAsyncThunk(
    "applewatch8/applewatch8Create",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/applewatch8`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const appleWatch8Slice = createSlice({
    name:"applewatch6",
    initialState,
    reducers:{},
    extraReducers:{
        [appleWatch8Fetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [appleWatch8Fetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [appleWatch8Fetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [appleWatch8Create.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [appleWatch8Create.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("apple watch 8 Created")
           
        },

        [appleWatch8Create.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default appleWatch8Slice.reducer