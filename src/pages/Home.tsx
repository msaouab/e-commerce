import styled from "styled-components";
import Banner from "../components/Banner";
import Trending from "../components/Trending";
import OurProducts from "../components/OurProducts";

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
			<OurProducts />
			<Banner $isFirst={TopBanner} />
			<Trending />
			<Banner $isFirst={BottomBanner} />
		</HomeStyle>
	);
};

export default Home;
