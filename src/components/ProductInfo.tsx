import styled from "styled-components";
import DescriProduct from "./DescriProduct";
import ImgProduct from "./ImgProduct";
import { Props } from "../_types/Props";

const ProductStyle = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	margin-top: 2rem;
	position: relative;
	& > h2 {
		position: absolute;
		top: 2rem;
		left: 50%;
		transform: translateX(-50%);
	}
	& > .productInfo {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
	@media (max-width: 850px) {
		& > .productInfo {
			flex-direction: column;
		}
	}
`;

const ProductInfo = ({ item }: Props) => {
	const { img, otherImgs } = item;

	return (
		<ProductStyle>
			<div className="productInfo">
				<ImgProduct img={img} AllImg={otherImgs} />
				<DescriProduct item={item} />
			</div>
		</ProductStyle>
	);
};

export default ProductInfo;
