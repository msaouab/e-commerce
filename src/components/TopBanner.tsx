import styled from "styled-components";
import Button from "./Button";
import TBanner from '../assets/imgs/hero grid/top banner.jpg'

const BannerStyle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 25rem;
	& > .rightSide {
		height: 100%;
		width: 50%;
		& > img {
			width: 100%;
			height: 100%;
			max-width: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
	& > .leftSide {
		width: 50%;
		height: 100%;
		background-color: #e9e9e9;
		display: flex;
		& > .text {
			width: 58%;
			margin: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: start;
			gap: 1.5rem;
			& > h2 {
				font-size: 2rem;
				font-weight: 600;
			}
		}
	}
	@media (max-width: 600px) {
		& > .rightSide {
			display: none;
		}
		& > .leftSide {
			width: 100%;
		}
	}
	@media (max-width: 333px) {
		& > .leftSide {
			& > .text {
				width: 90%;
				& > h2 {
					font-size: 1.5em;
				}
			}
		}
	}
`;

const TopBanner = () => {
	return (
		<BannerStyle className="container">
			<div className="leftSide ">
				<div className="text">
					<h2>Comfortable & Elegante Living</h2>
					<p>
						RAOUF Products are all made to standard sizes so that you can mix
						and match them freely.
					</p>
					<Button text="SHOP NOW" />
				</div>
			</div>
			<div className="rightSide">
				<img src={TBanner} alt="Bottom Banner" />
			</div>
		</BannerStyle>
	);
};

export default TopBanner;
