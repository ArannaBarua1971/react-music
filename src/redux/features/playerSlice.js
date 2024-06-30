import { createSlice } from "@reduxjs/toolkit"


const initialState={
    currentSong:null,
    isPlaying:false,
    songInfo:[]
}

const playerSlice=createSlice({
    name:"playlist",
    initialState,
    reducers:{
        playSong:(state,action)=>{
            state.currentSong=action.payload;
            state.isPlaying=true
        },
        pauseSong: (state) => {
            state.isPlaying = false;
          },
    }
})

export const {playSong,pauseSong}=playerSlice.actions;
export default playerSlice.reducer