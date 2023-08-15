import styled from "styled-components";
import DescriProduct from "./DescriProduct";
import ImgProduct from "./ImgProduct";

const ProductStyle = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: .5rem;
	margin-top: 2rem;
	& > h2 {
		text-align: center;
	}
	& > div {
		display: flex;
		gap: 1rem;
		& > div {
			width: 50%;
		}
	}
`;

interface Props {
	item: {
		description: string;
		specs: string;
		price: number;
		img: string;
		otherImgs: string[];
	};
}

const ProductInfo: React.FC<Props> = ({ item }) => {
	const { description, specs, price, img, otherImgs } = item;

	return (
		<ProductStyle className="">
			<h2>{description}</h2>
			<div>
				<ImgProduct img={img} AllImg={otherImgs} />
				<DescriProduct text={specs} price={price} />
			</div>
		</ProductStyle>
	);
};

export default ProductInfo;
