import styled from "styled-components";
import items from "../data/AllData";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import { Link } from "react-router-dom";

const CardsStyle = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1rem;
	margin-top: 5rem;
	& > a {
		text-decoration: none;
		color: #000;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		border: 2px solid rgba(0, 0, 0, 0.3);
		& > img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		& > div {
			padding: 0.7rem;
			& > p:last-child {
				font-size: 1.5rem;
				/* font-weight: 700; */
			}
		}
	}
	@media (max-width: 750px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media (max-width: 600px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 430px) {
		grid-template-columns: 1fr;
	}
`;

const ProductCards = () => {
	const value = useSelector((state: RootState) => state.category);

	let filteredItem = items;
	console.log(filteredItem);
	if (value !== "all")
		filteredItem = items.filter((item) => item.category === value);

	return (
		<CardsStyle>
			{filteredItem.map((item, index) => (
				<Link key={index} to={item.description}>
					<img src={item.img} alt={""} />
					<div className="productInfo">
						<p className="title">{item.description}</p>
						<p className="price">{item.price}$</p>
					</div>
				</Link>
			))}
		</CardsStyle>
	);
};

export default ProductCards;
