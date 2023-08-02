import styled from "styled-components";
import BottomBanner from "../components/BottomBanner";
import TopBanner from "../components/TopBanner";

const HomeStyle = styled.div`
	margin-top: 130px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 5rem;
`;

const Home = () => {
	return (
		<HomeStyle className="container">
			<h1>Home</h1>
			<TopBanner />
			<BottomBanner />
		</HomeStyle>
	);
};

export default Home;
