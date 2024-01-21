import { SelectedItem } from "./rootReducer";

export const SET_QUANTITY = "SET_QUANTITY";
export const SET_SELECTED_ITEM = "SET_SELECTED_ITEM";

// actionCreators.ts
interface SetQuantityAction {
	type: typeof SET_QUANTITY;
	payload: {
		productId: number;
		quantity: number;
	};
}

interface SetSelectedItemAction {
	type: typeof SET_SELECTED_ITEM;
	payload: SelectedItem[];
}

export type ActionTypes = SetQuantityAction | SetSelectedItemAction;

export const setQuantity = (
	productId: number,
	quantity: number,
): SetQuantityAction => ({
	type: SET_QUANTITY,
	payload: { productId, quantity },
});

export const setSeletedItem = (
	updatedSelectedItem: SelectedItem[],
): SetSelectedItemAction => ({
	type: SET_SELECTED_ITEM,
	payload: updatedSelectedItem,
});
