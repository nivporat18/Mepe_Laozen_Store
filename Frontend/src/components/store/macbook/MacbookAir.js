import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const macbookAirFetch =  createAsyncThunk(
    "macbookair/macbookairFetch",
   async ()=>{
        const response = await axios.get(`${url}/macbookair`)
        return response?.data
    }
)


export const macbookAirCreate =  createAsyncThunk(
    "macbookair/macbookairCreate",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/macbookair`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const MacbookAirSlice = createSlice({
    name:"macbookair",
    initialState,
    reducers:{},
    extraReducers:{
        [macbookAirFetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [macbookAirFetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [macbookAirFetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [macbookAirCreate.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [macbookAirCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("Macbook Air Created")
           
        },

        [macbookAirCreate.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default MacbookAirSlice.reducer