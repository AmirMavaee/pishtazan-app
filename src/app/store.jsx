import { configureStore } from "@reduxjs/toolkit";
import userPassReducers from '../features/UserPass/UserPassSlice'

const store = configureStore({
    reducer:{userPass:userPassReducers}
})

export default store;
