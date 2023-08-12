import styled from "styled-components";
import data from "../data/dbStore.json";
import { Link } from "react-router-dom";
import { setCategory } from "../../reducers/StoreSlice";
import { useDispatch } from "react-redux";

const HeadStyle = styled.section`
	display: grid;
	gap: 0.5rem;
	grid-template-areas:
		"one two four"
		"one two four-low";
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	height: 31rem;
	width: 100%;
	& .item1 {
		grid-area: one;
	}
	& .item2 {
		grid-area: two;
	}
	& .item3 {
		grid-area: four;
	}
	& .item4 {
		grid-area: four-low;
	}
	& > .item {
		position: relative;
		& img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: 50% 50%;
			filter: brightness(0.7);
			transition: filter 0.3s ease-in-out;
		}
		& > img:hover {
			filter: brightness(0.6);
		}
		& .description {
			position: absolute;
			bottom: 1rem;
			left: 1rem;
			color: white;
			font-size: 2rem;
		}
	}
	@media (max-width: 750px) {
		grid-template-areas:
			"one two"
			"four four-low";
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		height: 15rem;
	}
`;

const item = data.head;

const HeadHome = () => {
	const dispatch = useDispatch();

	return (
		<HeadStyle>
			<Link
				to={item.Item1.link}
				className="item item1"
				onClick={() => dispatch(setCategory(item.Item1.title))}
			>
				<img src={item.Item1.image} alt={item.Item1.alt} />
				<p className="description">{item.Item1.content}</p>
			</Link>
			<Link
				to={item.Item2.link}
				className="item item2"
				onClick={() => dispatch(setCategory(item.Item2.title))}
			>
				<img src={item.Item2.image} alt={item.Item2.alt} />
				<p className="description">{item.Item2.content}</p>
			</Link>
			<Link
				to={item.Item3.link}
				className="item item3"
				onClick={() => dispatch(setCategory(item.Item3.title))}
			>
				<img src={item.Item3.image} alt={item.Item3.alt} />
				<p className="description">{item.Item3.content}</p>
			</Link>
			<Link
				to={item.Item4.link}
				className="item item4"
				onClick={() => dispatch(setCategory(item.Item4.title))}
			>
				<img src={item.Item4.image} alt={item.Item4.alt} />
				<p className="description">{item.Item4.content}</p>
			</Link>
		</HeadStyle>
	);
};

export default HeadHome;
