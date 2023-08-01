import styled from "styled-components";
import BottomBanner from "../components/BottomBanner";

const HomeStyle = styled.div`
	margin-top: 130px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Home = () => {
	return (
		<HomeStyle className="container">
			<h1>Home</h1>
			<BottomBanner />
		</HomeStyle>
	);
};

export default Home;
