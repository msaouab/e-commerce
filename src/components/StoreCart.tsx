import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";
import Drawer from "@mui/material/Drawer";
import { Box, Button, Divider, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import empty from "../img/cart/empty-cart.png";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import AddItemToCart from "./AddItemToCart";
import items from "../data/AllData";

const Style = styled.div`
	& > Button {
		min-width: 2rem;
		padding: 0;
		cursor: pointer;
		position: relative;
		& > .notif {
			position: absolute;
			top: -0.7rem;
			right: -0.5rem;
			background-color: #b6002c;
			color: #fff;
			border-radius: 50%;
			width: 1.2rem;
			height: 1.2rem;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 0.7rem;
		}
		& > svg {
			font-size: 1.5rem;
			color: #000;
		}
	}
	@media (max-width: 500px) {
		& > Button {
		}
		& > .drawer {
			width: 100px;
		}
	}
`;

const ListStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	& > .textShopping {
		font-size: 1.2rem;
		font-weight: 600;
		width: 90%;
	}
	& > .closeButton {
		width: 1.5rem;
		display: flex;
		cursor: pointer;
		padding: 0;
		& > svg {
			width: 100%;
			height: 100%;
			font-size: 1.5rem;
		}
	}
	@media (max-width: 500px) {
	}
`;

const ContentStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding: 2rem;
	& > img {
	}
	& > p {
		font-size: 1.3rem;
		font-weight: 500;
	}
	& > button {
		padding: 0.7rem 1.2rem;
		font-size: 1rem;
		cursor: pointer;
	}
`;

const StoreCart = () => {
	const [open, setOpen] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const counter = useSelector((state: RootState) => state.countProduct);
	const selectedId = useSelector((state: RootState) => state.selectedId);
	const item = items.find((item) => item.id === selectedId);

	const handleResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const getList = () => (
		<Box>
			<ListStyle>
				<p className="textShopping">Your Shopping Cart (0)</p>
				<ListItem
					onClick={() => setOpen(false)}
					className="closeButton"
				>
					<AiOutlineCloseCircle />
				</ListItem>
			</ListStyle>
			<Divider />
			{selectedId === 0 ? (
				<ContentStyle>
					<img src={empty} alt="" />
					<p>Your cart is empty</p>
					<button onClick={() => setOpen(false)}>
						Keep Browsing
					</button>
				</ContentStyle>
			) : (
				<AddItemToCart item={item} />
			)}
		</Box>
	);

	return (
		<Style>
			<Button onClick={() => setOpen(true)} className="btn">
				{counter > 0 && <span className="notif">{counter}</span>}
				{<MdOutlineLocalGroceryStore />}
			</Button>
			<Drawer
				open={open}
				anchor={"left"}
				onClose={() => setOpen(false)}
				className="drawer"
				PaperProps={{
					sx: {
						width: width > 500 ? "500px" : "100%",
						color: "#000000",
						overflowY: "scroll",
					},
				}}
			>
				{getList()}
			</Drawer>
		</Style>
	);
};

export default StoreCart;
