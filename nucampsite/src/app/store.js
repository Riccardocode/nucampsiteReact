import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    partners: partnersReducer,
    comments:commentsReducer,
    promotions:promotionsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
