import styled from "styled-components";
import Trending from "../components/Trending";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";
import ProductInfo from "../components/ProductInfo";
import Kpis from "../components/Kpis";
import Products from "../data/AllData";

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
	const Item = Products.find((item) => item.id === id);

	if (!Item) {
		return <div>Product not found</div>;
	}
	const { texture, weight, size } = Item;
	return (
		<PageStyle className="container">
			<article>
				<ProductInfo item={Item} />
				<Kpis texture={texture} weight={weight} size={size} />
			</article>
			<Trending />
		</PageStyle>
	);
};

export default ProductPage;
