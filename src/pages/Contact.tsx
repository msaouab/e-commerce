import styled from "styled-components";

const ContactStyle = styled.div`
	background-color: #191919;
	color: #fff;
	& > .container {
		height: 300px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 2rem;
		& > h2 {
			font-size: 2.25rem;
		}
		& > form {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
			gap: .5rem;
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
	@media (max-width: 317px) {
		& > .container {
			& > form {
				& > input, & > button {
					width: 100%;
				}
			}
		}
	}
`;

const Contact = () => {
	return (
		<ContactStyle className="">
			<div className="container">
				<h2>Newsletter</h2>
				<form>
					<input type="text" placeholder="your@email.com" />
					<button type="submit">Subscribe</button>
				</form>
			</div>
		</ContactStyle>
	);
};

export default Contact;
