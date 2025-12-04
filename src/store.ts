import {configureStore} from '@reduxjs/toolkit';

import configReducer from './editor/configSlice';
import diagramReducer from './editor/diagramSlice';

export const store = configureStore({
  reducer: {
    config: configReducer,
    diagram: diagramReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
