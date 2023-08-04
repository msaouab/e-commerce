import styled from "styled-components";
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { useRef } from "react";
import items from "../data/AllData";
import ItemCard from "./ItemCard";

const TrendingStyle = styled.section`
	display: flex;
	flex-direction: column;
	gap: 3rem;
	width: 100%;
	& > article {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		& > h1 {
			font-size: 2rem;
		}
		& > div {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1rem;
			& > button {
				display: flex;
				background-color: transparent;
				border: none;
				width: 2.5rem;
				cursor: pointer;
				& > svg {
					width: 100%;
					height: 100%;
					background-color: white;
					fill: rgba(0, 0, 0, 0.8);
					&:hover {
						fill: rgba(0, 0, 0, 1);
					}
				}
			}
		}
	}
`;

const SliderStyle = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	gap: 1rem;
	overflow-x: hidden;
	transition: scroll 1s ease-in-out;
	scroll-behavior: smooth;
	& > div {
		width: 600px;
		height: 100%;
		& > :first-child {
			& > a {
				width: 15rem;
			}
		}
	}
`;

const Trending = () => {
	const sliderRef = useRef<HTMLDivElement | null>(null);

	const filltredItems = items.filter((item) => item.id >= 8);

	const LeftKey = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft -= 250;
		}
	};

	const RightKey = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollLeft += 250;
		}
	};

	return (
		<TrendingStyle className="">
			<article>
				<h1>Trending Now</h1>
				<div>
					<button onClick={LeftKey}>
						<BsFillArrowLeftSquareFill />
					</button>
					<button onClick={RightKey}>
						<BsFillArrowRightSquareFill />
					</button>
				</div>
			</article>
			<SliderStyle ref={sliderRef}>
				{filltredItems.map((item, index) => (
					<div key={index} className="">
						<ItemCard item={item} />
					</div>
				))}
			</SliderStyle>
		</TrendingStyle>
	);
};

export default Trending;
