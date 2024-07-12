/* eslint-disable no-unsafe-optional-chaining */
import { createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    user:[],
    currentUser:{
        email:'',
        password:'',
    }
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        loginUser:(state,action) => {
            state.currentUser = action.payload
        },
        registerUser:(state,action) => {
            state.user.push(action.payload)
        },
        logoutUser:(state) => {
            state.currentUser = initialState.currentUser
        },
        addFavorite:(state, action) => {
            const userIndex = state.user.findIndex((item:any)=> item.email === state.currentUser.email)
            state.user[userIndex] = {
                ...state.user[userIndex],
                favorite:[...state.user[userIndex].favorite, action.payload]
            }
        },
        removeFavorite:(state, action) => {
            const userIndex = state.user.findIndex((item:any)=> item.email === state.currentUser.email)
            state.user[userIndex] = {
                ...state.user[userIndex],
                favorite:state.user[userIndex].favorite?.filter((item:any)=> item['Title'] !== action.payload)
            }
        }
    }
}) 
export const {registerUser, loginUser,logoutUser, addFavorite, removeFavorite} = authSlice.actions;
export default authSlice.reducer;