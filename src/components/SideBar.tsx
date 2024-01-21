import styled from "styled-components";
import { useState } from "react";
import empty from "../img/cart/empty-cart.png";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import items from "../data/AllData";
import { Sidebar } from "primereact/sidebar";
import { CgShoppingCart } from "react-icons/cg";
import "./SideBar.css";
import AddItemToCart from "./AddItemToCart";

const Style = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	& > button {
		background-color: transparent;
		border: none;
		font-size: 1.5rem;
		cursor: pointer;
		position: relative;
		&:hover {
			color: #000;
		}
		span {
			position: absolute;
			top: -0.5rem;
			right: -0.5rem;
			background-color: #b6002c;
			color: #fff;
			border-radius: 50%;
			height: 1rem;
			width: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 0.8rem;
		}
	}
`;

const SideBar = () => {
	const [visible, setVisible] = useState<boolean>(false);
	const selectedItems = useSelector((state: RootState) => state.seletedItem);
	const products = items.filter((item) =>
		selectedItems.some((selectedItem) => selectedItem.id === item.id),
	);

	const getToTalPrice = () => {
		const totalPrice = products.reduce((total, item) => {
			const quantity = selectedItems.find(
				(selected) => selected.id === item.id,
			)?.quantity;
			return total + item.price * (quantity || 1);
		}, 0);
		return totalPrice;
	};

	const totalPrice: number = getToTalPrice();
	console.log(totalPrice);

	const customHeader = (
		<div className="headerSideBar">
			<span className="">Your Shopping Cart ({products.length})</span>
		</div>
	);

	const emptyCard = () => (
		<div className="empty-card">
			<img src={empty} alt="" />
			<p>Your cart is empty</p>
			<button>Keep Browsing</button>
		</div>
	);

	return (
		<Style>
			<button onClick={() => setVisible(true)}>
				<CgShoppingCart />
				{products.length > 0 && <span>{products.length}</span>}
			</button>
			<Sidebar
				visible={visible}
				position="left"
				onHide={() => setVisible(false)}
				header={customHeader}
				className=""
			>
				<div className="contentSideBar">
					{products.length > 0
						? products.map((item, index) => (
								<AddItemToCart item={item} key={index} />
						  ))
						: emptyCard()}
				</div>
				{products.length > 0 && (
					<div className="footerSideBar">
						<div className="totalSideBar">
							<p>Total</p>
							<p>{totalPrice} $</p>
						</div>
						<button>Go To Checkout</button>
					</div>
				)}
			</Sidebar>
		</Style>
	);
};

export default SideBar;
