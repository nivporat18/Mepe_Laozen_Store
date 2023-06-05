import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const airPodsProFetch =  createAsyncThunk(
    "airpodspro/airpodsproFetch",
   async ()=>{
        const response = await axios.get(`${url}/airpodspro`)
        return response?.data
    }
)


export const airPodsProCreate =  createAsyncThunk(
    "airpodspro/airpodsproCreate",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/airpodspro`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const airpodsproSlice = createSlice({
    name:"airpodspro",
    initialState,
    reducers:{},
    extraReducers:{
        [airPodsProFetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [airPodsProFetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [airPodsProFetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [airPodsProCreate.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [airPodsProCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("airPods Pro Created")
           
        },

        [airPodsProCreate.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default airpodsproSlice.reducer