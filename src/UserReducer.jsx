import { createSlice } from "@reduxjs/toolkit";
import { userList } from "./Data";

const userSlice = createSlice({
    name:"users",
    initialState: userList,
    reducers:{
        addUser: (state,action)=>{
            state.push(action.payload)
        },
        updateUser: (state , action)=>{
         const { id , name , contact , desgn} = action.payload
         const updUser = state.find(user=>user.id == id)
         if(updUser){
            updUser.name = name;
            updUser.contact = contact;
            updUser.desgn = desgn
         }
        },
        deleteUser : (state , action) =>{
            const { id } = action.payload
            const updUser = state.find(user=>user.id == id)
            if (updUser) {
                return state.filter(f=>f.id !== id)
            }
        }
    }
})
export const {addUser , updateUser , deleteUser} = userSlice.actions
export default userSlice.reducer;