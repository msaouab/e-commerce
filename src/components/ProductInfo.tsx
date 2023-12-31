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
	@media (max-width: 850px) {
		& > div {
			flex-direction: column;
			& > div {
				width: 100%;
			}
		}
	}
`;

interface Props {
	item: {
		id: number;
		description: string;
		specs: string;
		price: number;
		img: string;
		otherImgs: string[];
	};
}

const ProductInfo: React.FC<Props> = ({ item }) => {
	const { description, img, otherImgs } = item;

	return (
		<ProductStyle>
			<h2>{description}</h2>
			<div className="">
				<ImgProduct img={img} AllImg={otherImgs} />
				<DescriProduct item={item} />
			</div>
		</ProductStyle>
	);
};

export default ProductInfo;
