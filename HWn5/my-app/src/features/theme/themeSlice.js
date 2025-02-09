import { createSlice } from "@reduxjs/toolkit";
let initialState = { light: true }

export const lightThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        switchTheme: (state) => {
            state.light = state.light ? false : true;
        }
    }
})

export const { switchTheme } = lightThemeSlice.actions;

export const selectTheme = (state) => state.theme.light;

export default lightThemeSlice.reducer;