import { ActionTypes, SET_QUANTITY, SET_SELECTED_ITEM } from "./actionTypes";

export type SelectedItem = {
	id: number;
	quantity: number;
};

interface RootState {
	seletedItem: SelectedItem[];
	// ... other state properties ...
}

const initialState: RootState = {
	seletedItem: [],
	// ... other initial state properties ...
};

export const rootReducer = (
	state: RootState = initialState,
	action: ActionTypes,
): RootState => {
	switch (action.type) {
		case SET_QUANTITY:
			return {
				...state,
				seletedItem: state.seletedItem.map((item) =>
					item.id === action.payload.productId
						? { ...item, quantity: action.payload.quantity }
						: item,
				),
			};
		case SET_SELECTED_ITEM:
			return {
				...state,
				seletedItem: action.payload,
			};
		// ... other cases ...
		default:
			return state;
	}
};
