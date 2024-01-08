import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUsers = createAsyncThunk("poetry", async () => {
    const result = await axios.get("https://backend-poetry-api-iba-final.vercel.app/api/v1/getPoetry")
        .then((response) => response.data.data)
        ;
    return result;
});

let initialState = {
    loading: false,
    users: [],
    error: ''
}

const Slicer = createSlice({
    initialState,
    name: 'show',
    reducers: {
        getUsersData: (state, action) => {
            state.users = action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(getUsers.pending, (state, action) => {
            state.loading = true
        }
        )
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            console.log('sss', action.payload)
            state.users = action.payload;

        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        });
    }
})

export const { getUsersData } = Slicer.actions
export default Slicer.reducer