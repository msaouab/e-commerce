import styled from "styled-components";

const ImgStyle = styled.div``;

interface Props {
	img: string;
	AllImg: string[];
}

const ImgProduct: React.FC<Props> = ({ img, AllImg }) => {
	console.log(AllImg, img);
	return (
		<ImgStyle>
		</ImgStyle>
	)
};

export default ImgProduct;