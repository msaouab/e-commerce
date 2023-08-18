import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from "styled-components";

const Style = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
	& > .image {
		width: 20%;
		& > img {
			min-width: 100%;
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	& > div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		height: 100%;
		& > div {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: flex-start;
			gap: 0.5rem;
			& > p {
				font-size: 1.2rem;
				font-weight: 500;
			}
			& > .qteBtn {
				border: 1px solid black;
				display: flex;
				justify-content: space-between;
				align-items: center;
				& > p {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 1.5rem;
					aspect-ratio: 1;
					text-align: center;
					border-left: 1px solid black;
					border-right: 1px solid black;
				}
				& > button {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 1.5rem;
					aspect-ratio: 1;
					font-size: 1.5rem;
					border: none;
					cursor: pointer;
					background-color: #fff;
					&:hover {
						background-color: #e5e5e5;
					}
				}
			}
		}
	}
`;

interface Item {
	item: {
		id: number;
		description: string;
		price: number;
		img: string;
	};
}

const AddItemToCart: React.FC<Item> = ({ item }) => {
	const [qte, setQte] = useState(1);
	const { description, price, img } = item;

	const increQte = () => {
		setQte(qte + 1);
	};
	const decrQre = () => {
		if (qte > 1) setQte(qte - 1);
	};

	return (
		<Style className="debug">
			<div className="image">
				<img src={img} alt={description} />
			</div>
			<div>
				<div>
					<p>{description}</p>
					<div className="qteBtn">
						<button onClick={decrQre} className="increment">
							-
						</button>
						<p>{qte}</p>
						<button onClick={increQte} className="decrement">
							+
						</button>
					</div>
				</div>
				<div>
					<p>{price}$</p>
					<button className="close">
						<AiOutlineCloseCircle />
					</button>
				</div>
			</div>
		</Style>
	);
};

export default AddItemToCart;
