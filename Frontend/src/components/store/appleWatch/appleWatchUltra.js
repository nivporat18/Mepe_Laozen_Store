import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const appleWatchUltraFetch =  createAsyncThunk(
    "applewatchultra/applewatchultraFetch",
   async ()=>{
        const response = await axios.get(`${url}/applewatchultra`)
        return response?.data
    }
)


export const appleWatchUltraCreate =  createAsyncThunk(
    "applewatchultra/applewatchultraCreate",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/applewatchultra`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const appleWatchUltraSlice = createSlice({
    name:"applewatchultra",
    initialState,
    reducers:{},
    extraReducers:{
        [appleWatchUltraFetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [appleWatchUltraFetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [appleWatchUltraFetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [appleWatchUltraCreate.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [appleWatchUltraCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("apple watch Ultra Created")
           
        },

        [appleWatchUltraCreate.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default appleWatchUltraSlice.reducer