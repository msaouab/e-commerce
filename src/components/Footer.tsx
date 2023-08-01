import styled from "styled-components";

const FooterStyle = styled.footer`
	background-color: #000;
	color: #fff;
	height: 10.5rem;
	display: flex;
	text-align: center;
	& > .container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		& > ul {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			gap: .5rem;
			& > li {
				cursor: pointer;
				list-style: none;
			}
		}
		& > div {
			& > p {
				& > a {
					color: #fff;
					text-decoration: none;
				}
			}
		}
	}
`;

const Footer = () => {
	return (
		<FooterStyle className="≈">
			<div className="container">
				<ul>
					<li>About</li>
					<li>Store Locator</li>
					<li>FAQs</li>
					<li>News</li>
					<li>Careers</li>
					<li>Contact Us</li>
				</ul>
				<div>
					<p>
						Build by
						<a href="https://github.com/msaouab/e-commerce" target="_black">
							{" < msaouab />"}
						</a>
					</p>
				</div>
			</div>
		</FooterStyle>
	);
};

export default Footer;
