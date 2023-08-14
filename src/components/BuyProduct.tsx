import styled from "styled-components";

const Style = styled.div`
	display: flex;
	gap: 1rem;
	& > button {
	}
`;

const BuyProduct = () => {
	return (
		<Style>
			<button className="add">add to cart</button>
			<button className="buy">buy now</button>
		</Style>
	);
};

export default BuyProduct;
