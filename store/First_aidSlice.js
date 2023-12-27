import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    first_aids: [],
    first_aid: {}, 
};

export const first_aidsSlice = createSlice({
    name: 'first_aids',
    initialState,
    reducers: {
        setfirst_aids: (state, { payload }) => {
            state.first_aids = payload;
        },
        setfirst_aid: (state, { payload }) => {
            state.first_aid = payload;
        },
        resetfirst_aid: (state) => {
            state.first_aid = {};
        },
    },
});

export const first_aidsReducer = first_aidsSlice.reducer;

export const { setfirst_aids, setfirst_aid, resetfirst_aid } = first_aidsSlice.actions;
