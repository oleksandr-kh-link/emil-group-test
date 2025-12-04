import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ConfigState {
  readOnly: boolean
  theme: 'dark' | 'light'
  keyboardEnabled: boolean
  // Routing toggles for experimentation/debugging
  obstaclePadding: number
  allowDoglegs: boolean
}

const initialState: ConfigState = {
  readOnly: false,
  theme: 'dark',
  keyboardEnabled: true,
  obstaclePadding: 8,
  allowDoglegs: true,
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    setReadOnly(state, action: PayloadAction<boolean>) {
      state.readOnly = action.payload;
    },
    setTheme(state, action: PayloadAction<ConfigState['theme']>) {
      state.theme = action.payload;
    },
    setKeyboardEnabled(state, action: PayloadAction<boolean>) {
      state.keyboardEnabled = action.payload;
    },
    setObstaclePadding(state, action: PayloadAction<number>) {
      state.obstaclePadding = action.payload;
    },
    setAllowDoglegs(state, action: PayloadAction<boolean>) {
      state.allowDoglegs = action.payload;
    },
  },
});

export const {
  setReadOnly,
  setTheme,
  setKeyboardEnabled,
  setObstaclePadding,
  setAllowDoglegs,
} = configSlice.actions;

export default configSlice.reducer;
