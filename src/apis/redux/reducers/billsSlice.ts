import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "Initializing...",
    payload: [],
};

// const billsReducer =  (state=INITIAL_STATE, action)=>{
    
//     switch(action.type){
//         case BILLS_FETCH_SUCCESS:
//             return {...state, status: BILLS_FETCH_SUCCESS, payload: action.payload};
//         case BILLS_FETCH_FAIL:
//             console.log("billsReducer: BILLS_FETCH_FAIL");
//             return {...state, status: BILLS_FETCH_FAIL};
//         case BILLS_CREATE_SUCCES:
//             return {...state, status: BILLS_CREATE_SUCCES, payload: action.payload};
//         case BILLS_CREATE_FAIL:
//             console.log("billsReducer: BILLS_CREATE_FAIL");
//             return {...state, status: BILLS_CREATE_FAIL};
//         default:
//             return state;
//     }
// };

// export default billsReducer

const billsSlice = createSlice({
    name: 'bills',
    initialState,
    reducers:{
        fetch_fail: (state)=>{
            state.status = 'BILLS_FETCH_FAIL';
        },
        fetch_success:(state, action)=>{
            state.status = 'BILLS_FETCH_SUCCESS'; 
            state.payload = action.payload;
        },
        create_fail:(state)=>{
            state.status = 'BILLS_CREATE_FAIL';
        },
        create_success:(state, action)=>{
            state.status = 'BILLS_CREATE_SUCCES'; 
            state.payload = action.payload;
        }
    }

})

export const billsReducer = billsSlice.reducer;
export const billsActions = billsSlice.actions;