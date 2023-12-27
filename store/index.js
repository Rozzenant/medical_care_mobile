import { configureStore } from '@reduxjs/toolkit';
import { first_aidsReducer } from './First_aidSlice';

export const store = configureStore({ reducer: { first_aid: first_aidsReducer } });