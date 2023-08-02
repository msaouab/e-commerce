import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryStyle = styled.section`
	& > header {
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
			}
		}
	}
`;

const Categories = () => {
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
					<h1>{"ALL"}</h1>
				</div>
			</header>
		</CategoryStyle>
	);
};

export default Categories;
