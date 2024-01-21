import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setSeletedItem } from "../../reducers/StoreSlice";
import { Props } from "../_types/Props";
import { RootState } from "../../reducers/store";

const Style = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 100%;
	& .btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 3rem;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 700;
		border: none;
		width: 100%;
		text-transform: uppercase;
		background: transparent;
	}
	& .add {
		color: #000;
		border: 2px solid #000;
	}
	& .buy {
		background-color: #b6002c;
		border: 2px solid #b6002c;
		color: #fff;
	}
	& .add:hover {
		background-color: #000;
		color: #fff;
	}
	& .buy:hover {
		background-color: #fff;
		color: #b6002c;
	}
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

const BuyProduct = ({ item }: Props) => {
	const dispatch = useDispatch();
	const quantity = useSelector((state: RootState) => state.quantity);
	const selectedItems = useSelector((state: RootState) => state.seletedItem);

	const handleClick = (id: number) => {
		const existingItem = selectedItems.find((item) => item.id === id);

		if (existingItem) {
			const updatedSelectedItems = selectedItems.map((item) =>
				item.id === id ? { ...item, quantity: quantity } : item,
			);

			dispatch(setSeletedItem(updatedSelectedItems));
		} else {
			dispatch(
				setSeletedItem([
					...selectedItems,
					{
						id: id,
						quantity: quantity,
					},
				]),
			);
		}
	};

	return (
		<Style className="">
			<button className="btn add" onClick={() => handleClick(item.id)}>
				add to cart
			</button>
			<button className="btn buy">buy now</button>
		</Style>
	);
};

export default BuyProduct;
