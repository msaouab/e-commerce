import styled from "styled-components";
import BtmBanner from "../imgs/hero grid/bottom banner.jpg";
import Button from "./Button";

const BannerStyle = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 25rem;
	& > .rightSide {
		width: 50%;
		height: 100%;
		& > img {
			width: 100%;
			height: 100%;
			max-width: 100%;
			object-fit: cover;
		}
	}
	& > .leftSide {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 1rem;
		padding: 0 8rem;
		& > h2 {
			font-size: 3.2rem;
			font-weight: 600;
		}
		& > p {
		}
	}
`;

const BottomBanner = () => {
	return (
		<BannerStyle>
			<div className="rightSide">
				<img src={BtmBanner} alt="Bottom Banner" />
			</div>
			<div className="leftSide">
				<h2>Comfortable & Elegante Living</h2>
				<p>
					RAOUF Products are all made to standard sizes so that you can mix and
					match them freely.
				</p>
				<Button text="SHOP NOW" />
			</div>
		</BannerStyle>
	);
};

export default BottomBanner;
