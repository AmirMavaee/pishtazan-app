import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    username:'',
    password:'',
    ticket:''
}

const reducers = {
    user:(state , action) =>{
        state.username = action.payload
    },
    pass:(state , action) =>{
        state.password = action.payload
    },
    ticket:(state , action)=>{
        state.ticket = action.payload
    }
}


const UserPassSlice = createSlice({
    name:"userpass",
    initialState,
    reducers,
})

export default UserPassSlice.reducer;
export const {user , pass , ticket} = UserPassSlice.actions;