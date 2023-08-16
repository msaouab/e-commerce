import styled from "styled-components";
import items from "../data/AllData";
import DescriptionCards from "./DescriptionCards";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import ProductInfo from "./ProductInfo";

const ProductStyle = styled.section`
	& > article {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
`;

const Products = () => {
	const id = useSelector((state: RootState) => state.id);
	const Item = items.filter((item) => item.id === id);

	console.log(id);

	return (
		<ProductStyle className="">
			<article>
				<ProductInfo item={Item[0]} />
				<DescriptionCards
					texture={Item[0].texture}
					weight={Item[0].weight}
					size={Item[0].size}
				/>
			</article>
		</ProductStyle>
	);
};

export default Products;
