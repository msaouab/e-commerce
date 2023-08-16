import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import NavCategory from "../components/NavCategory";
// import ProductCards from "../components/ProdectCards";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers/store";

const CategoryStyle = styled.section`
	& > header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2rem;
		& > div {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			& > .left {
				flex: 1;
				& > a {
					text-decoration: none;
					color: #000;
					display: flex;
					align-items: center;
					font-size: 1.2rem;
					& > svg {
						color: #000;
						font-size: 1.4rem;
					}
				}
			}
			& > h1 {
				flex: 1;
				font-size: 1.8rem;
				text-transform: uppercase;
				font-weight: bolder;
			}
		}
	}
`;

const Categories = () => {
	const value = useSelector((state: RootState) => state.category);
	return (
		<CategoryStyle className="container">
			<header className="">
				<div>
					<div className="left">
						<Link to={"/"}>
							<MdKeyboardArrowLeft />
							Home
						</Link>
					</div>
					<h1>{value}</h1>
				</div>
				{/* <NavCategory /> */}
			</header>
			{/* <ProductCards /> */}
		</CategoryStyle>
	);
};

export default Categories;
