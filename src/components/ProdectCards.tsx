import styled from "styled-components";
import items from "../data/AllData";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import ItemCard from "./ItemCard";

const CardsStyle = styled.ul`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1rem;
	margin-top: 5rem;
	
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
	if (value !== "all")
		filteredItem = items.filter((item) => item.category === value);

	return (
		<CardsStyle>
			{filteredItem.map((item, index) => (
					<ItemCard key={index} item={item}/>
			))}
		</CardsStyle>
	);
};

export default ProductCards;
