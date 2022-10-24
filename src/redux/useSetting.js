import { createSlice } from '@reduxjs/toolkit';
export const UseSetting = createSlice({
    name: "UseSetting",
    initialState: {
        NightMode: false
    },
    reducers: {
        sun: (state, action) => {
            //  về mặc định
            const { style } = document.documentElement;
            style.setProperty("--text-white", "#fff");
            style.setProperty("--text-black", "#000");
            style.setProperty("--background-white", "#fff");
            style.setProperty("--color-borderWhite", "rgba(0, 0, 0, 0.3)");
            style.setProperty("---background-page", "#f9f9ff");
            style.setProperty("--background-cardlike", "#fff");
            style.setProperty("--background-cardlike-hover", "0px 10px 30px 0px rgb(0 0 0 / 8%)");
            style.setProperty("--background-cardlike-border", "#fff");
            style.setProperty("--btn-border", "#000");
            style.setProperty("--background-footer", "#000410");
            state.NightMode = false;
        },
        moon: (state, action) => {
            //  về ngược lại
            const { style } = document.documentElement;
            style.setProperty("--text-white", "#000");
            style.setProperty("--text-black", "#fff");
            style.setProperty("--background-white", "#000");
            style.setProperty("--color-borderWhite", "rgba(255, 255, 255, 0.3)");
            style.setProperty("---background-page", "#000");
            style.setProperty("--background-cardlike", "rgba(0,0,0,.274)");
            style.setProperty("--background-cardlike-hover", "0px 10px 30px 0px rgb(255 255 255 / 8%)");
            style.setProperty("--background-cardlike-border", "#000");
            style.setProperty("--btn-border", "#fff");
            style.setProperty("--background-footer", "#f0f0f0");
            state.NightMode = true;
        },
    }
})
export const {
    sun, moon
} =
    UseSetting.actions;
export default UseSetting.reducer;