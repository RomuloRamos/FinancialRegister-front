import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import {userRecucer} from '../reducers/userSlice';
import {addressRecucer} from '../reducers/addressSlice';
import {billsReducer} from '../reducers/billsSlice';
import {houseReducer} from '../reducers/houseSlice';
import {authReducer} from '../reducers/authSlice';


export const store = configureStore({
    reducer: {
        // auth: authReducer,
        user: userRecucer,
        // address: addressRecucer,
        // bills: billsReducer,
        // houses: houseReducer,
    },
    // middleware: [thunkMiddleware],
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
