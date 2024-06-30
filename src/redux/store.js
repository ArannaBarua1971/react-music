import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./features/playerSlice";

 const store=configureStore({
    reducer:{
        playlist:playerSlice
    }
})
export default store