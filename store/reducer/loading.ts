import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SessionState {
  loaded: Boolean;
}

const initialState: SessionState = {
  loaded: false,
};

const layoutLoading = createSlice({
  name: "loaded",
  initialState,
  reducers: {
    setLoaded: (state, action: PayloadAction<Boolean>) => {
      state.loaded = action.payload;
    },
  },
});

export const { setLoaded } = layoutLoading.actions;
export default layoutLoading.reducer;
