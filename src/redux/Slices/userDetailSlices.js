import { createSlice } from "@reduxjs/toolkit";

const userDetail=createSlice({
    name:'userDetail',
    initialState:{
        user:[],
        },
    reducers:{
        getUserDetails:(state,action)=>{
            state.user=action.payload;
            },
    }
})

export default userDetail.reducer