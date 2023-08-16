import styled from "styled-components";
import Trending from "../components/Trending";
import Products from "../components/Products";

const PageStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
`;

const ProductPage = () => {
	return (
		<PageStyle className="container">
			{/* <Products /> */}
			<Trending />
		</PageStyle>
	)
};

export default ProductPage;