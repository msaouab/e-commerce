import styled from "styled-components";

const ContactStyle = styled.div`
	background-color: #191919;
	color: #fff;
	& > .container {
		height: 300px;
		max-width: 1200px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		margin: auto;
		padding: 0 19px;
		& > h2 {
			font-size: 2.25rem;
		}
		& > form {
			display: flex;
			column-gap: .5rem;
			& > input, & > button {
				padding: .5rem;
				font-size: 1rem;
				outline: none;
				border: none;
			}
			& > button {
				cursor: pointer;
			}
		}
	}
`;

const Contact = () => {
	return (
		<ContactStyle className="debug">
			<div className="container">
				<h2>Newsletter</h2>
				<form>
					<input type="text" placeholder="john@doe.com" />
					<button type="submit">Subscribe</button>
				</form>
			</div>
		</ContactStyle>
	);
};

export default Contact;
