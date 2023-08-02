import styled from "styled-components";
import Banner from "../components/Banner";

const HomeStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 5rem;
`;

const Home = () => {
	const TopBanner: boolean = true;
	const BottomBanner: boolean = false;
	return (
		<HomeStyle className="container">
			<h1>Home</h1>
			<Banner $isFirst={TopBanner} />
			<Banner $isFirst={BottomBanner} />
		</HomeStyle>
	);
};

export default Home;
