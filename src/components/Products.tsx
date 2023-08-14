import styled from "styled-components";
import items from "../data/AllData";
import DescriptionCards from "./DescriptionCards";

const ProductStyle = styled.section``;

const Products = () => {
	const id = 2;
	const Item = items.filter((item) => item.id === id);

	console.log(Item);

	return (
		<ProductStyle>
			{Item.map((item, index) => (
				<article key={index}>
					<DescriptionCards
						texture={item.texture}
						weight={item.weight}
						size={item.size}
					/>
				</article>
			))}
		</ProductStyle>
	);
};

export default Products;
