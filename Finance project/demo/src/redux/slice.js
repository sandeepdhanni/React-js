import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: [],
  currentPage: 1,
  totalPages: 0,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.results = action.payload.results;
      state.totalPages = action.payload.totalPages;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});

export const { setSearchResults, setCurrentPage } = searchSlice.actions;

export default searchSlice.reducer;
