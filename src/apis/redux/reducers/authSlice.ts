import { createSlice } from "@reduxjs/toolkit";
// import {SIGN_IN, SIGN_OUT} from '../actions/types';
import connection from "@/apis/axios/axiosConfig";
import { type } from "os";

const initialState = {
    status: false,
    payload: {
        sub:'',
        name:'',
        email: ''
    }
};

// const saveLoginContext = ( accessToken, userData) => {
//     console.log("AuthReducer: Saving new auth contexts....")
//     const strToken = JSON.stringify(accessToken);
//     const strUserData = JSON.stringify(userData);
//     localStorage.setItem("accessToken", strToken);
//     localStorage.setItem("userData",strUserData);
// } 

const authSlice =  createSlice({

    name: 'auth',
    initialState,
    reducers: {
        // case SIGN_IN:
        //     console.log("Auth Reducer called: SIGN_IN");
        //     console.log("SIGN_IN: ", action);
        //     if(action.payload.status === HTTPSTATUS_OK){ //200 if its a new login, 0 if was recovered
        //         saveLoginContext(action.payload.data.access_token, action.payload.data.userData);
        //     }
        //     // Add a request interceptor
        //     connection.interceptors.request.use((config) => {
        //         console.log("Updatig header")
        //         const accessToken = JSON.parse(localStorage.getItem('accessToken'));
        //         config.headers.Authorization =  "Bearer "+accessToken;
        //         console.log("new config: ", config);
        //         return config;
        //     });
    
        //     return {
        //             ...state, 
        //             status: true, 
        //             payload: action.payload.data.userData
        //         };
    
        // case SIGN_OUT:
        //     console.log("Auth Reducer called: SIGN_OUT");
        //         return {
        //             ...state, 
        //             status: false, 
        //             payload: action.payload || null
        //         };
        
        // default:
        //     return state;

    }

});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;