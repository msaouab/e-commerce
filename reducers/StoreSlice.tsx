import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StoreState {
	category: string;
}

const initialState: StoreState = {
	category: "all",
};

const StoreSlice = createSlice({
	name: "store",
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<string>) => {
			state.category = action.payload;
		},
	},
});

export const { setCategory } = StoreSlice.actions;
export default StoreSlice.reducer;