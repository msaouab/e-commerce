import styled from "styled-components";
import Trending from "../components/Trending";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import ProductInfo from "../components/ProductInfo";
import DescriptionCards from "../components/DescriptionCards";
import items from "../data/AllData";

const PageStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	& > article {
		display: flex;
		flex-direction: column;
		gap: 4rem;
	}
`;

const ProductPage = () => {
	const id = useSelector((state: RootState) => state.id);
	const Item = items.filter((item) => item.id === id);
	return (
		<PageStyle className="container">
			<article>
				<ProductInfo item={Item[0]} />
				<DescriptionCards
					texture={Item[0].texture}
					weight={Item[0].weight}
					size={Item[0].size}
				/>
			</article>
			<Trending />
		</PageStyle>
	);
};

export default ProductPage;
