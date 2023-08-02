import styled from "styled-components";
import Button from "./Button";
import { useEffect, useState } from "react";
import data from "../data/dbStore.json";

const BannerStyle = styled.section<{ $isFirst?: boolean }>`
	display: flex;
	flex-direction: ${({ $isFirst }) => ($isFirst ? "row-reverse" : "row")};
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

interface BannerData {
	image: string;
	alt: string;
	header: string;
	content: string;
	link: string;
}

const Banner = (Props: { $isFirst: boolean }) => {
	const { $isFirst } = Props;
	const [banner, setBanner] = useState<BannerData | null>(null);

	useEffect(() => {
		if ($isFirst === true) setBanner(data.Banner.topBanner);
		if ($isFirst === false) setBanner(data.Banner.bottomBanner);
	}, [$isFirst]);

	if (!banner) return null;

	return (
		<BannerStyle $isFirst={$isFirst} className="container">
			<div className="rightSide">
				<img src={banner?.image} alt={banner.alt} />
			</div>
			<div className="leftSide ">
				<div className="text">
					<h2>{banner?.header}</h2>
					<p>{banner?.content}</p>
					<Button link={banner?.link} />
				</div>
			</div>
		</BannerStyle>
	);
};

export default Banner;
