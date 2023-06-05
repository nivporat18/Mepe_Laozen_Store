import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const airPods3Fetch =  createAsyncThunk(
    "airpods3/airpods3Fetch",
   async ()=>{
        const response = await axios.get(`${url}/airpods3`)
        return response?.data
    }
)


export const airPods3Create =  createAsyncThunk(
    "airpods3/airpods3Create",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/airpods3`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const airpods3Slice = createSlice({
    name:"airpods3",
    initialState,
    reducers:{},
    extraReducers:{
        [airPods3Fetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [airPods3Fetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [airPods3Fetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [airPods3Create.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [airPods3Create.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("airPods 3 Created")
           
        },

        [airPods3Create.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default airpods3Slice.reducer