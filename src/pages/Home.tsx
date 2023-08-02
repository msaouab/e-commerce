import styled from "styled-components";
import Banner from "../components/Banner";
// import TopBanner from "../components/TopBanner";

const HomeStyle = styled.div`
	margin-top: 130px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 5rem;
`;

const Home = () => {
	const TopBanner: boolean = false;
	const BottomBanner: boolean = true;
	return (
		<HomeStyle className="container">
			<h1>Home</h1>
			<Banner isFirst={TopBanner} />
			<Banner isFirst={BottomBanner} />
		</HomeStyle>
	);
};

export default Home;
