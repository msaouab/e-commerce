import styled from "styled-components";
import Banner from "../components/Banner";
import Trending from "../components/Trending";
import OurProducts from "../components/OurProducts";
import HeadHome from "../components/HeadHome";

const HomeStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	gap: 5rem;
	/* margin-top: 8rem; */
	@media (max-width: 768px) {
		margin-top: .5rem;
	}
`;

const Home = () => {
	const TopBanner: boolean = true;
	const BottomBanner: boolean = false;
	return (
		<HomeStyle className="container">
			<HeadHome />
			<OurProducts />
			<Banner $isFirst={TopBanner} />
			<Trending />
			<Banner $isFirst={BottomBanner} />
		</HomeStyle>
	);
};

export default Home;
