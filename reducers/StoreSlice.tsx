import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StoreState {
	category: string;
	id: number;
	countProduct: number;
	selectedIds: number[];
	quantity: number;
	seletedItem: {
		id: number;
		quantity: number;
	}[];
}

const initialState: StoreState = {
	category: "all",
	id: 1,
	countProduct: 0,
	selectedIds: [],
	quantity: 1,
	seletedItem: [],
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
		setSelectedIds: (state, action: PayloadAction<number[]>) => {
			state.selectedIds = action.payload;
		},
		setQuantity: (state, action: PayloadAction<number>) => {
			state.quantity = action.payload;
		},
		setSeletedItem: (
			state,
			action: PayloadAction<StoreState["seletedItem"]>,
		) => {
			state.seletedItem = action.payload;
		},
	},
});

export const {
	setCategory,
	setId,
	setCount,
	setSelectedIds,
	setQuantity,
	setSeletedItem,
} = StoreSlice.actions;
export default StoreSlice.reducer;
