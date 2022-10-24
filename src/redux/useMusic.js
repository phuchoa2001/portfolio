import { createSlice } from '@reduxjs/toolkit';
export const UseMusic = createSlice({
    name: "UseMusic",
    initialState: {
        audio: null,
        open: false
    },
    reducers: {
        getmusic: (state, action) => {
            //  về mặc định
            state.audio = action.payload

        },
        play: (state, action) => {
            //  về mặc định
            state.audio.play();
            state.open = true;

        },
        stop: (state, action) => {
            //  về ngược lại
            state.audio.pause();
            state.open = false;
        },
    }
})
export const {
    play, stop, getmusic
} =
    UseMusic.actions;
export default UseMusic.reducer;