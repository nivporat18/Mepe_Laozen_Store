import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const macbookProFetch =  createAsyncThunk(
    "macbookpro/macbookproFetch",
   async ()=>{
        const response = await axios.get(`${url}/macbookpro`)
        return response?.data
    }
)


export const macbookProCreate =  createAsyncThunk(
    "macbookpro/macbookproCreate",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/macbookpro`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const MacbookProSlice = createSlice({
    name:"macbookpro",
    initialState,
    reducers:{},
    extraReducers:{
        [macbookProFetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [macbookProFetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [macbookProFetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [macbookProCreate.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [macbookProCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("Macbook Pro Created")
           
        },

        [macbookProCreate.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default MacbookProSlice.reducer