import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SessionState {
  loading: Boolean;
}

const initialState: SessionState = {
  loading: false,
};

const layoutLoading = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<Boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = layoutLoading.actions;
export default layoutLoading.reducer;
