import styled from "styled-components";
import NavCategoryData from '../data/NavCategoryData'
import { Link } from "react-router-dom";

const NavStyle = styled.nav`
	& > ul {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
		& > li {
			list-style: none;
			border: 2px solid rgba(0, 0, 0, 0.3);
			padding: 0.4rem 0.8rem;
			font-size: 1rem;
			& > a {
				color: #000;
				text-decoration: none;
			}
		}
		& > li:hover {
			border: 2px solid rgba(0, 0, 0, 0.5);
		}
	}
`;

const NavCategory = () => {
	return (
		<NavStyle className="">
			<ul>
				{NavCategoryData.map((item, index) => (
					<li key={index}><Link to={item.path}>{item.name}</Link></li>
				))}
			</ul>
		</NavStyle>
	);
};

export default NavCategory;