import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const ipadAirFetch =  createAsyncThunk(
    "ipadair/ipadairFetch",
   async ()=>{
        const response = await axios.get(`${url}/ipadair`)
        return response?.data
    }
)


export const ipadAirCreate =  createAsyncThunk(
    "ipadair/ipadairCreate",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/ipadair`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const ipadAirSlice = createSlice({
    name:"ipadair",
    initialState,
    reducers:{},
    extraReducers:{
        [ipadAirFetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [ipadAirFetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [ipadAirFetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [ipadAirCreate.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [ipadAirCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("Ipad Air Created")
           
        },

        [ipadAirCreate.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default ipadAirSlice.reducer