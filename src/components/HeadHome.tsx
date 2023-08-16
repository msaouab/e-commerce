import styled from "styled-components";
import data from "../data/dbStore.json";
import { NavLink } from "react-router-dom";
import { setCategory } from "../../reducers/StoreSlice";
import { useDispatch } from "react-redux";

const HeadStyle = styled.section`
	gap: .8rem;
	display: grid;
	grid-template-areas: 
		"a b c"
		"a b d";
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	height: 31rem;
	& > a {
		overflow: hidden;
		height: 100%;
		width: 100%;
		text-decoration: none;
		color: #000;
		& > img {
			width: 100%;
			height: 100%;
			max-width: 100%;
			object-fit: cover;
			object-position: 50% 50%;
		}
	}
	& > .item1 {
		grid-area: a;
	}
	& > .item2 {
		grid-area: b;
	}
	& > .item3 {
		grid-area: c;
	}
	& > .item4 {
		grid-area: d;
	}
	@media (max-width: 768px) {
		grid-template-areas:
			"a b"
			"c d";
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		height: 31rem;
	}
`;

const item = data.head;

const HeadHome = () => {
	const dispatch = useDispatch();

	const handleClick = (title: string) => {
		dispatch(setCategory(title));
		window.scrollTo(0, 0);
	};

	return (
		<HeadStyle>
			<NavLink
				to={item.Item1.link}
				className="item item1"
				onClick={() => handleClick(item.Item1.title)}
				
			>
				<img src={item.Item1.image} alt={item.Item1.alt} />
				<p className="description">{item.Item1.content}</p>
			</NavLink>
			<NavLink
				to={item.Item2.link}
				className="item item2"
				onClick={() => handleClick(item.Item1.title)}
			>
				<img src={item.Item2.image} alt={item.Item2.alt} />
				<p className="description">{item.Item2.content}</p>
			</NavLink>
			<NavLink
				to={item.Item3.link}
				className="item item3"
				onClick={() => handleClick(item.Item1.title)}
			>
				<img src={item.Item3.image} alt={item.Item3.alt} />
				<p className="description">{item.Item3.content}</p>
			</NavLink>
			<NavLink
				to={item.Item4.link}
				className="item item4"
				onClick={() => handleClick(item.Item1.title)}
			>
				<img src={item.Item4.image} alt={item.Item4.alt} />
				<p className="description">{item.Item4.content}</p>
			</NavLink>
		</HeadStyle>
	);
};

export default HeadHome;
