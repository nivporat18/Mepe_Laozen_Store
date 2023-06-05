import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const airPods2Fetch =  createAsyncThunk(
    "airpods2/airpods2Fetch",
   async ()=>{
        const response = await axios.get(`${url}/airpods2`)
        return response?.data
    }
)


export const airPods2Create =  createAsyncThunk(
    "airpods2/airpods2Create",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/airpods2`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const airpods2Slice = createSlice({
    name:"airpods2",
    initialState,
    reducers:{},
    extraReducers:{
        [airPods2Fetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [airPods2Fetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [airPods2Fetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [airPods2Create.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [airPods2Create.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("airPods 2 Created")
           
        },

        [airPods2Create.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default airpods2Slice.reducer