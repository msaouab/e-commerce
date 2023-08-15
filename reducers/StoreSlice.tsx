import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StoreState {
	category: string;
	id: number;
}

const initialState: StoreState = {
	category: "all",
	id: 8,
};

const StoreSlice = createSlice({
	name: "store",
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<string>) => {
			state.category = action.payload;
		},
		setId: (state, action: PayloadAction<number>) => {
			state.id = action.payload;
		}
	},
});

export const { setCategory, setId } = StoreSlice.actions;
export default StoreSlice.reducer;