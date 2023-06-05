import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const imacFetch =  createAsyncThunk(
    "imac/imacFetch",
   async ()=>{
        const response = await axios.get(`${url}/imac`)
        return response?.data
    }
)


export const imacCreate =  createAsyncThunk(
    "imac/imacCreate",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/imac`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const ImacSlice = createSlice({
    name:"imac",
    initialState,
    reducers:{},
    extraReducers:{
        [imacFetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [imacFetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [imacFetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [imacCreate.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [imacCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("Imac Created")
           
        },

        [imacCreate.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default ImacSlice.reducer