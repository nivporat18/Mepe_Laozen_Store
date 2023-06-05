import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const ipadMiniFetch =  createAsyncThunk(
    "ipadmini/ipadminiFetch",
   async ()=>{
        const response = await axios.get(`${url}/ipadmini`)
        return response?.data
    }
)


export const ipadMiniCreate =  createAsyncThunk(
    "ipadmini/ipadminiCreate",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/ipadmini`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const ipadMiniSlice = createSlice({
    name:"ipadmini",
    initialState,
    reducers:{},
    extraReducers:{
        [ipadMiniFetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [ipadMiniFetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [ipadMiniFetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [ipadMiniCreate.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [ipadMiniCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("Ipad Mini Created")
           
        },

        [ipadMiniCreate.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default ipadMiniSlice.reducer