import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { build } from "vite";


export const getUsers = createAsyncThunk("users/getUsers", async () =>{
await axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    console.log(res.data)
    return res.data
})
})
let initialState = {
    loading: false,
    users:[],
    error: ''
}


const Slicer = createSlice({
    initialState,
    name: 'show', 
    reducers:{
        getUsersData: (state, action) => {
            state.users = action.payload
        }
    },
    extraReducers :builder=> {
        builder.addCase(getUsers.pending, (state, action) => {  
            state.loading = true
        }
        )   
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            console.log('fulfilled',action.payload);
            state.error = '';

        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        });
    }
})

export const {getUsersData} = Slicer.actions
export default Slicer.reducer