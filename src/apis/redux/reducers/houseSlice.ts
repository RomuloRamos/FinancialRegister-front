import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    status: 'false',
    payload: {},
};

// const houseReducer =  (state=INITIAL_STATE, action)=>{
    
//     // console.log("houseReducer action: ", action);
//     switch(action.type){
//         case HOUSE_FETCH_SUCCESS:
//             return {...state, status: HOUSE_FETCH_SUCCESS, payload: action.payload};
//         case HOUSE_FETCH_FAIL:
//             console.log("houseReducer: HOUSE_FETCH_FAIL");
//             return {...state, status: HOUSE_CREATE_FAIL, payload: action.payload};
//         case HOUSE_CREATE_SUCCESS:
//             return {...state, status: HOUSE_CREATE_SUCCESS, payload: action.payload};
//         case HOUSE_CREATE_FAIL:
//             console.log("houseReducer: HOUSE_CREATE_FAIL");
//             return {...state, status: HOUSE_CREATE_FAIL, payload: action.payload};
//         case HOUSE_UPDATE_SUCCESS:
//             return {...state, status: HOUSE_UPDATE_SUCCESS, payload: action.payload};
//         case HOUSE_UPDATE_FAIL:
//             console.log("houseReducer: HOUSE_UPDATE_FAIL");
//             return {...state, status: HOUSE_UPDATE_FAIL, payload: action.payload};
//         default:
//             return state;
//     }
// };

// export default houseReducer


const houseSlice = createSlice({
    name: 'house',
    initialState,
    reducers: {
        fetch_fail: (state, action) =>{
            state.status = 'HOUSE_FETCH_FAIL';
            state.payload = action.payload;
        },
        fetch_success: (state, action) =>{
            state.status = 'HOUSE_FETCH_SUCCESS';
            state.payload = action.payload;
        },
        create_fail: (state, action) =>{
            state.status = 'HOUSE_CREATE_FAIL';
            state.payload = action.payload;
        },
        create_success: (state, action) =>{
            state.status = 'HOUSE_CREATE_SUCCESS';
            state.payload = action.payload;
        },
        update_fail: (state, action) =>{
            state.status = 'HOUSE_UPDATE_FAIL';
            state.payload = action.payload;
        },
        update_success: (state, action) =>{
            state.status = 'HOUSE_UPDATE_SUCCESS';
            state.payload = action.payload;
        },
    }
});

export const houseReducer = houseSlice.reducer;
export const houseActions = houseSlice.actions;