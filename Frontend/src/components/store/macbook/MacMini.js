import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const macMiniFetch =  createAsyncThunk(
    "macmini/macminiFetch",
   async ()=>{
        const response = await axios.get(`${url}/macmini`)
        return response?.data
    }
)


export const macMiniCreate =  createAsyncThunk(
    "macmini/macminiCreate",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/macmini`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const MacMiniSlice = createSlice({
    name:"macmini",
    initialState,
    reducers:{},
    extraReducers:{
        [macMiniFetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [macMiniFetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [macMiniFetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [macMiniCreate.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [macMiniCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("Mac Mini Created")
           
        },

        [macMiniCreate.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default MacMiniSlice.reducer