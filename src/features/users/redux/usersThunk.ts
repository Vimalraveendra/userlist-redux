import {createAsyncThunk} from "@reduxjs/toolkit"
import { fetchUsers } from "./usersApi";
import { User } from "./usersTypes";

export const loadUsers=createAsyncThunk<User[],void,{rejectValue:string}>(
  "users/loadUsers",
  async(_,thunkAPI)=>{
    try{
       return await fetchUsers();
    }catch(error:any){
        return thunkAPI.rejectWithValue(error.message)
    }
  }
)