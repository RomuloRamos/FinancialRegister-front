import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE = {
    status: false,
    payload: {},
};

// const addressReducer =  (state=INITIAL_STATE, action)=>{
//     // console.log("...addressReducer...");
//     switch(action.type){
//         case 'FETCH_ADDRESS':
//             return {...state, status: action.payload.status, payload: action.payload.value};
        
//         case 'CREATE_ADDRESS':
//             return {...state, status: action.payload.status, payload: action.payload.value};
    
//         default:
//             return state;
//     }
// };

const addressSlice = createSlice({
    name: 'address',
    initialState: INITIAL_STATE,
    reducers: {
        fetch: (state, action)=>{
            state.status = action.payload.status;
            state.payload = action.payload.value;
        },
        create:(state, action)=>{
            state.status = action.payload.status;
            state.payload = action.payload.value;
        }, 
    }
})


// export default addressReducer

export const addressRecucer = addressSlice.reducer;
export const addressAction = addressSlice.actions;

