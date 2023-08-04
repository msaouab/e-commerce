import styled from "styled-components";
import { RootState } from "../../reducers/store";
import { useSelector } from "react-redux";
import items from "../data/AllData";
import ItemCard from "./ItemCard";

const ProductStyle = styled.div`
	width: 100%;
	& > article {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
		gap: 1rem;
		margin-top: 5rem;
	}

	@media (max-width: 750px) {
		& > article {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media (max-width: 600px) {
		& > article {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 430px) {
		& > article {
			grid-template-columns: 1fr;
		}
	}
`;

const OurProducts = () => {
	const value = useSelector((state: RootState) => state.category);

	let filteredItem = items;
	if (value !== "all") filteredItem = items.filter((item) => item.id > 8);

	filteredItem = filteredItem.slice(0, 8);
	return (
		<ProductStyle className="">
			<h1>Products we are proud of</h1>
			<article>
				{filteredItem.map((item, index) => (
					<ItemCard key={index} item={item} />
				))}
			</article>
		</ProductStyle>
	);
};

export default OurProducts;
