import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {store} from '../store/store';
import connection from '@/apis/axios/axiosConfig';
import {iUser} from '@/apis/server/ServerTypes';

// export interface iUserReducer {
//     data: iUser,
//     status: number,
//     statusText: string
// }

export type User ={
    loading: boolean,
    user: iUser|null,
    error: string
}

const initialState: User = {
    loading: false,
    user: null,
    error: '',
}

//Generates pending, fulfilled and rejected action types
export const userFetch = createAsyncThunk('user/userFetch',async() =>{
    console.log("userFetch called");    
    try {
        const authData = store.getState().auth;
        console.log("userFetch auth data: ", authData);
        const response = await connection.get(`/users?id=${/*authData.payload.sub*/110947002841407220502}`);
        return response.data;            
    } catch (error) {
        return error;
    }
});

export const userCreate = createAsyncThunk('user/userCreate',async(userData:iUser) =>{
    console.log("userCreate: ", userData);
    return await connection.post('users', {...userData})
    .then(result =>{
        console.log("userCreate Success: ", result);
        return result.data;
    })
    .catch((error)=>{
        console.log("userCreate ERROR: ", error);
        return error;
    }); 
})

export const userUpdate = createAsyncThunk('user/userUpdate',async (userData:iUser) =>{
    try {
        console.log("userUpdate: ", userData);
        const response = await connection.put('users', {...userData, cpf:"aaaaaa"})
        return response.data;        
    } catch (error) {
        console.log("userUpdate Error: ", error);
        return error;        
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        // fetch_fail: (state, action)=>{
        //     state.status = 'USER_FETCH_FAIL';
        //     state.payload = action.payload;
        // },
        // fetch_success: (state, action)=>{
        //     state.status = 'USER_FETCH_SUCCESS';
        //     state.payload = action.payload;
        // },
        // create_fail: (state, action)=>{
        //     state.status = 'USER_CREATE_FAIL';
        //     state.payload = action.payload;
        // },
        // create_success: (state, action)=>{
        //     state.status = 'USER_CREATE_SUCCESS';
        //     state.payload = action.payload;
        // },
        // update_fail: (state, action)=>{
        //     state.status = 'USER_UPDATE_FAIL';
        //     state.payload = action.payload.request;
        // },
        // update_success: (state, action)=>{
        //     state.status = 'USER_UPDATE_SUCCESS';
        //     state.payload = action.payload;
        // },
    },
    extraReducers:(builder)=>{
        builder.addCase(userFetch.pending, (state)=>{
            state.loading = true;
        })
        builder.addCase(
            userFetch.fulfilled, 
            (state, action:PayloadAction<iUser>) => {
                state.loading = false;
                state.user = action.payload;
                state.error = '';
            }
        )
        builder.addCase(userFetch.rejected, (state,action)=>{
            state.loading = false;
            state.user = null;
            state.error = action.error.message || 'User Fetch Default Error';
        }),
        builder.addCase(userCreate.pending, (state)=>{
            state.loading = true;
        }),
        builder.addCase(userCreate.fulfilled, (state,action:PayloadAction<iUser>)=>{
            state.loading = false;
            state.user = action.payload;
            state.error = '';
        }),
        builder.addCase(userCreate.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message || 'User Create Default Error';
        }),
        builder.addCase(userUpdate.pending, (state)=>{
            state.loading = true;
        }),
        builder.addCase(userUpdate.fulfilled, (state,action:PayloadAction<iUser>)=>{
            state.loading = false;
            state.user = action.payload;
            state.error = '';
        }),
        builder.addCase(userUpdate.rejected, (state,action)=>{
            state.loading = false;
            state.error = action.error.message || 'User Update Default Error';;
        })
    }

})

export const userRecucer = userSlice.reducer;
export const userAction = userSlice.actions;