import styled from "styled-components";

const FooterStyle = styled.footer`
	background-color: #000;
	color: #fff;
	& > .container {
		height: 130px;
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		margin: auto;
		padding: 0 19px;
		& > ul {
			display: flex;
			gap: 1rem;
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
		<FooterStyle>
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
						<a href="">{" <msaouab />"}</a>
					</p>
				</div>
			</div>
		</FooterStyle>
	);
};

export default Footer;
