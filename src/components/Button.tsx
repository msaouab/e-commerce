import { Link } from "react-router-dom";
import styled from "styled-components";

const BtnStyle = styled.div`
	.actionBtn {
		padding: 10px 13px;
		border: 2px solid var(--action-btn-color);
		font-weight: 700;
		transition: 0.1s ease-in-out;
		box-sizing: border-box !important;
		width: fit-content;
		color: white;
		background-color: black;
		outline: 2px solid black;
		outline-offset: -2px;
		cursor: pointer;
		text-decoration: none;
	}
	.actionBtn:hover {
		background-color: transparent;
		color: black;
	}
`;

interface ButtonProps {
	text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
	return (
		<BtnStyle>
			<Link to={""} className="actionBtn">
				{text}
			</Link>
		</BtnStyle>
	);
};

export default Button;
