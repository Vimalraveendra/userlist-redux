import {createSlice} from "@reduxjs/toolkit";
import { UsersState } from "./usersTypes";
import {loadUsers} from "./usersThunk";

const initialState:UsersState={
    isLoading:false,
    userList:[],
    error:null
}

const usersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
       builder
        .addCase(loadUsers.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(loadUsers.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.userList=action.payload;
            state.error=null;
        })
        .addCase(loadUsers.rejected,(state,action)=>{
            state.isLoading=false;
            state.userList=[];
            state.error=action.payload??null;
        })
    }
})

export default usersSlice.reducer;