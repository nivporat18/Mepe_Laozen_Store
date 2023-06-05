import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const airPodsProMaxFetch =  createAsyncThunk(
    "airpodspromax/airpodspromaxFetch",
   async ()=>{
        const response = await axios.get(`${url}/airpodspro`)
        return response?.data
    }
)


export const airPodsProMaxCreate =  createAsyncThunk(
    "airpodspromax/airpodspromaxCreate",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/airpodspromax`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const airpodspromaxSlice = createSlice({
    name:"airpodspromax",
    initialState,
    reducers:{},
    extraReducers:{
        [airPodsProMaxFetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [airPodsProMaxFetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [airPodsProMaxFetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [airPodsProMaxCreate.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [airPodsProMaxCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("airPods Pro Max Created")
           
        },

        [airPodsProMaxCreate.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default airpodspromaxSlice.reducer