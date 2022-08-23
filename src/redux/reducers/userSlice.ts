import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    status: 'String',
    payload: {}
};

// const userReducer =  (state:initialState, action)=>{
    
//     switch(action.type){
//         case USER_FETCH_FAIL:
//             return {...state, status: USER_FETCH_FAIL, payload: action.payload};
//         case USER_FETCH_SUCCESS:
//                 return {...state, status: USER_FETCH_SUCCESS, payload: action.payload};
//         case USER_CREATE_SUCCESS:
//             return {...state, status: USER_CREATE_SUCCESS, payload: action.payload};
//         case USER_CREATE_FAIL:
//             return {...state, status: USER_CREATE_FAIL, payload: action.payload};
//         case USER_UPDATE_SUCCESS:
//             return {...state, status: USER_UPDATE_SUCCESS, payload: action.payload};
//         case USER_UPDATE_FAIL:
//             return {...state, status: USER_UPDATE_FAIL, payload: action.payload.request};
//         default:
//             return state;
//     }
// };

// export default userReducer;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        fetch_fail: (state, action)=>{
            state.status = 'USER_FETCH_FAIL';
            state.payload = action.payload;
        },
        fetch_success: (state, action)=>{
            state.status = 'USER_FETCH_SUCCESS';
            state.payload = action.payload;
        },
        create_fail: (state, action)=>{
            state.status = 'USER_CREATE_FAIL';
            state.payload = action.payload;
        },
        create_success: (state, action)=>{
            state.status = 'USER_CREATE_SUCCESS';
            state.payload = action.payload;
        },
        update_fail: (state, action)=>{
            state.status = 'USER_UPDATE_FAIL';
            state.payload = action.payload.request;
        },
        update_success: (state, action)=>{
            state.status = 'USER_UPDATE_SUCCESS';
            state.payload = action.payload;
        },
    }
})

export const userRecucer = userSlice.reducer;
export const userAction = userSlice.actions;