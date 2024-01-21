import { useEffect, useState } from "react";
import styled from "styled-components";
import BuyProduct from "./BuyProduct";
import { Props } from "../_types/Props";
import { useDispatch } from "react-redux";
import { setQuantity } from "../../reducers/StoreSlice";

const ProductStyle = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3rem;
	padding: 1rem;
	background-color: #e5e5e5;
	padding: 2rem;
	/* max-height: 600px; */
	& > p {
		font-size: 1.5rem;
	}
	& > .qte {
		display: flex;
		align-items: center;
		gap: 1rem;
		& > p {
			font-size: 1.5rem;
		}
		& > .price {
			font-size: 1.5rem;
			font-weight: 700;
			color: #000;
		}
		& > .qteBtn {
			display: flex;
			align-items: center;
			gap: 1rem;
			& > button {
				background-color: #fff;
				border: 1px solid rgba(0, 0, 0, 0.4);
				border-radius: 50%;
				height: 2rem;
				width: 2rem;
				cursor: pointer;
				font-size: 1.5rem;
				&:hover {
					background-color: #e5e5e5;
					color: #000;
				}
			}
			& > p {
				font-size: 1.5rem;
			}
		}
		@media (max-width: 400px) {
			flex-direction: column;
		}
	}
`;

const DescriProduct = ({ item }: Props) => {
	const dispatch = useDispatch();
	const { price, specs, name } = item;
	const [qte, setQte] = useState(1);
	const totalPrice = price * qte;

	useEffect(() => {
		setQte(1);
		dispatch(setQuantity(1));
	}, [dispatch, item]);

	const increQte = () => {
		setQte((prevQte) => {
			const newQte = prevQte + 1;
			dispatch(setQuantity(newQte));
			return newQte;
		});
	};

	const decrQre = () => {
		if (qte > 1) {
			setQte((prevQte) => {
				const newQte = prevQte - 1;
				dispatch(setQuantity(newQte));
				return newQte;
			});
		}
	};

	return (
		<ProductStyle>
			<h2>{name}</h2>
			<p>{specs}</p>
			<div className="qte">
				<p>Quantity</p>
				<div className="qteBtn">
					<button onClick={() => decrQre()} className="increment">
						-
					</button>
					<p>{qte}</p>
					<button onClick={() => increQte()} className="decrement">
						+
					</button>
				</div>
				<p className="price">{totalPrice}$</p>
			</div>
			<BuyProduct item={item} />
		</ProductStyle>
	);
};

export default DescriProduct;
