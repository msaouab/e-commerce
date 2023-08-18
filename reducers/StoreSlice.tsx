import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StoreState {
	category: string;
	id: number;
	countProduct: number;
	selectedId: number;
}

const initialState: StoreState = {
	category: "all",
	id: 1,
	countProduct: 0,
	selectedId: 0,
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
		},
		setCount: (state, action: PayloadAction<number>) => {
			state.countProduct = action.payload;
		},
		setSelectedId: (state, action: PayloadAction<number>) => {
			state.selectedId = action.payload;
		}
	},
});

export const { setCategory, setId, setCount, setSelectedId } = StoreSlice.actions;
export default StoreSlice.reducer;