import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../ReduxToolkit/Features/Counter/counterSlice'

export const store = configureStore({
    reducer:{
        counter: counterReducer

    },
})