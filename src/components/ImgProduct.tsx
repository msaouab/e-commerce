import { useEffect, useState } from "react";
import styled from "styled-components";

const ImgStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 50%;
	gap: 1rem;
	& > .mainImg {
		display: flex;
		justify-content: center;
		height: 70%;
		width: 100%;
		& > .selectedImg {
			height: 100%;
			width: 100%;
			max-width: 100%;
			object-fit: contain;
			cursor: pointer;
		}
	}
	& > .allImg {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		height: 20%;
		width: 20%;
		& > img {
			height: 100%;
			width: 100%;
			max-width: 100%;
			object-fit: cover;
			cursor: pointer;
		}
		& > img:hover {
			border: 1px solid rgba(0, 0, 0, 0.4);
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
		}
	}
	@media (max-width: 850px) {
		max-width: 100%;
	}
`;

interface Props {
	img: string;
	AllImg: string[];
}

const ImgProduct: React.FC<Props> = ({ img, AllImg }) => {
	const [selectedImg, setSelectedImg] = useState(img);

	const handleSelectedImg = (addImg: string) => {
		setSelectedImg(addImg);
	};

	useEffect(() => {
		handleSelectedImg(img);
	}, [img]);

	return (
		<ImgStyle>
			<div className="mainImg">
				<img src={selectedImg} alt="" className="selectedImg" />
			</div>
			<div className="allImg">
				<img
					src={img}
					alt=""
					onMouseEnter={() => handleSelectedImg(img)}
				/>
				{AllImg.map((elem, index) => (
					<img
						key={index}
						src={elem}
						alt=""
						onMouseEnter={() => handleSelectedImg(elem)}
					/>
				))}
			</div>
		</ImgStyle>
	);
};

export default ImgProduct;
