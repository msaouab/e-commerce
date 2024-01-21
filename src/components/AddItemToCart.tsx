import { useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Props } from "../_types/Props";
import { useDispatch, useSelector } from "react-redux";
import { setSeletedItem } from "../../reducers/StoreSlice";
import "./AddItemToCart.css";
import { RootState } from "../../reducers/store";

const AddItemToCart = ({ item }: Props) => {
	const dispatch = useDispatch();
	const selectedItems = useSelector((state: RootState) => state.seletedItem);
	const quantity =
		selectedItems.find((selected) => selected.id === item.id)?.quantity ||
		1;
	const { name, price, img } = item;
	const totalPrice = price * quantity;

	const increQte = () => {
		const newQuantity = quantity + 1;
		dispatch(
			setSeletedItem([
				{
					id: item.id,
					quantity: newQuantity,
				},
			]),
		);
	};

	useEffect(() => {
		const existingItem = selectedItems.find(
			(selected) => selected.id === item.id,
		);

		if (existingItem) {
			const updatedSelectedItems = selectedItems.map((selected) =>
				selected.id === item.id
					? { ...selected, quantity: quantity }
					: selected,
			);

			dispatch(setSeletedItem(updatedSelectedItems));
		} else {
			dispatch(
				setSeletedItem([
					...selectedItems,
					{
						id: item.id,
						quantity: quantity,
					},
				]),
			);
		}
	}, [dispatch, item, quantity]);

	const decrQre = () => {
		if (quantity > 1) {
			const newQuantity = quantity - 1;
			dispatch(
				setSeletedItem([
					{
						id: item.id,
						quantity: newQuantity,
					},
				]),
			);
		}
	};

	const handleRemoveProduct = (productId: number) => {
		const updatedSelectedItem = selectedItems.filter(
			(item) => item.id !== productId,
		);
		dispatch(setSeletedItem(updatedSelectedItem));
	};

	return (
		<div className="AddItemToCart">
			<div className="ProductImage">
				<img src={img} alt={name} />
			</div>
			<div className="productInfo">
				<div className="leftSide">
					<p className="productName">{name}</p>
					<div className="qteBtnSideBar">
						<button onClick={() => decrQre()} className="increment">
							-
						</button>
						<p>{quantity}</p>
						<button
							onClick={() => increQte()}
							className="decrement"
						>
							+
						</button>
					</div>
				</div>
				<div className="rightSide">
					<span
						className="remove"
						onClick={() => handleRemoveProduct(item.id)}
					>
						<AiOutlineCloseCircle />
					</span>
					<p className="productPrice">{totalPrice} $</p>
				</div>
			</div>
		</div>
	);
};

export default AddItemToCart;
