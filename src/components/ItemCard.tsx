import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { setId } from "../../reducers/StoreSlice";
import { useDispatch } from "react-redux";

const CardStyle = styled.div`
	& > a {
		text-decoration: none;
		color: #000;
		color: #000;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		border: 2px solid rgba(0, 0, 0, 0.3);
		transition: 0.1s ease-in-out;
		& > img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		& > div {
			width: 100%;
			padding: 0.7rem;
			& > p:last-child {
				font-size: 1.5rem;
			}
		}
	}
	& > a:hover {
		border: 2px solid #000;
	}
`;

interface Item {
	id: number;
	img: string;
	description: string;
	price: number;
}

const ItemCard = ({ item }: { item: Item }) => {
	const dispatch = useDispatch();

	const handleDispatch = (item: Item) => {
		dispatch(setId(item.id));
		window.scrollTo(0, 0);
	};

	return (
		<CardStyle className="">
			<NavLink to={`/product/${item.id}`}>
				<img
					src={item.img}
					alt={item.description}
					onClick={() => handleDispatch(item)}
				/>
				<div className="productInfo">
					<p className="title">{item.description}</p>
					<p className="price">{item.price}$</p>
				</div>
			</NavLink>
		</CardStyle>
	);
};

export default ItemCard;
