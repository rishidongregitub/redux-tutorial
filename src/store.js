import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './Features/Counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter : counterSlice,
    },
})