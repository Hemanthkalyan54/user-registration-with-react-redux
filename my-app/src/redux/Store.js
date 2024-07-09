import {configureStore} from '@reduxjs/toolkit'
import Userslice from './user.slice';
const Store = configureStore({
    reducer: {
        user:Userslice.reducer,
    },
});
export default Store;