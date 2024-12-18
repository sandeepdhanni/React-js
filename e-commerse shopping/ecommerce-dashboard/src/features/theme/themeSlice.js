import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: false, // Default theme is light
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode; // Toggle theme state
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
