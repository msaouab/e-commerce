import { useState } from "react";
import styled from "styled-components";
import BuyProduct from "./BuyProduct";

const ProductStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	padding: 8rem 5rem 8rem;
	background-color: #e5e5e5;
	& > p {
		font-size: 1.2rem;
		line-height: 30px;
		font-weight: 400;
	}
	& > .qte {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 1.5rem;
		& > .qteBtn {
			border: 1px solid black;
			display: flex;
			justify-content: space-between;
			align-items: center;
			& > p {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 3rem;
				aspect-ratio: 1;
				text-align: center;
				border-left: 1px solid black;
				border-right: 1px solid black;
			}
			& > button {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 3rem;
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
	@media (max-width: 1000px) {
		padding: 3rem 3rem;
	}
	@media (max-width: 850px) {
		padding: 2rem 1rem;
	}
	@media (max-width: 400px) {
		& > .qte {
			flex-direction: column;
			gap: 1rem;
		}
	}
`;


interface Props {
	text: string;
	price: number;
}

const DescriProduct: React.FC<Props> = ({ text, price }) => {
	const [qte, setQte] = useState(1);
	const totalPrice = price * qte;

	const increQte = () => {
		setQte(qte + 1);
	};
	const decrQre = () => {
		if (qte > 1) setQte(qte - 1);
	};

	return (
		<ProductStyle>
			<p>{text}</p>
			<div className="qte">
				<p>Quantity</p>
				<div className="qteBtn">
					<button onClick={decrQre} className="increment">-</button>
					<p>{qte}</p>
					<button onClick={increQte} className="decrement">+</button>
				</div>
				<p>{totalPrice}$</p>
			</div>
			<BuyProduct />
		</ProductStyle>
	);
};

export default DescriProduct;
