import styled from "styled-components";
import NavCategoryData from "../data/NavCategoryData";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../reducers/StoreSlice";

const NavStyle = styled.nav`
	& > ul {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		& > a {
			list-style: none;
			border: 2px solid rgba(0, 0, 0, 0.3);
			padding: 0.4rem 0.8rem;
			font-size: 1rem;
			color: #000;
			text-decoration: none;
		}
	}
	& > li:hover {
		border: 2px solid rgba(0, 0, 0, 0.5);
	}
`;

const NavCategory = () => {
	const dispatch = useDispatch();
	return (
		<NavStyle className="">
			<ul>
				{NavCategoryData.map((item, index) => (
					<NavLink
						key={index}
						to={item.path}
						onClick={() => dispatch(setCategory(item.category))}
						>
						{item.name}
					</NavLink>
				))}
			</ul>
		</NavStyle>
	);
};

export default NavCategory;
