import {configureStore} from '@reduxjs/toolkit'
import {userRecucer} from '../reducers/userSlice'
import {addressRecucer} from '../reducers/addressSlice'
import {billsReducer} from '../reducers/billsSlice'
import {houseReducer} from '../reducers/houseSlice'
// import {addressRecucer} from '../reducers/addressSlice'
// import {addressRecucer} from '../reducers/addressSlice'

export const store = configureStore({
    reducer: {
        user: userRecucer,
        address: addressRecucer,
        bills: billsReducer,
        houses: houseReducer,
    }
})
