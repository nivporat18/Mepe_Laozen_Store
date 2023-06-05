import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setHeaders, url } from "../API";
import { toast } from "react-toastify";



const initialState = {
    items:[],
    status:null,
    createStatus:null
}



export const ipadProFetch =  createAsyncThunk(
    "ipadpro/ipadproFetch",
   async ()=>{
        const response = await axios.get(`${url}/ipadpro`)
        return response?.data
    }
)


export const ipadProCreate =  createAsyncThunk(
    "ipadpro/ipadproCreate",
   async (values)=>{
    try {
        const response = await axios.post(`${url}/ipadpro`,values,setHeaders())
        return response?.data
    } catch (error) {
        console.log(error)
        toast.error(error.response?.data)
    }
       
    }
)




const IpadProSlice = createSlice({
    name:"ipadpro",
    initialState,
    reducers:{},
    extraReducers:{
        [ipadProFetch.pending]:(state,action)=>{
            state.status = "pending"
        },

        [ipadProFetch.fulfilled]:(state,action)=>{
            state.status = "success"
            state.items = action.payload
        },

        [ipadProFetch.rejected]:(state,action)=>{
            state.status = "rejected"
        },



        [ipadProCreate.pending]:(state,action)=>{
            state.createStatus = "pending"
        },

        [ipadProCreate.fulfilled]:(state,action)=>{
            state.items.push(action.payload)
            state.createStatus = "success"
            toast.success("Ipad Pro Created")
           
        },

        [ipadProCreate.rejected]:(state,action)=>{
            state.createStatus = "rejected"
        }
        
    }
})



export default IpadProSlice.reducer