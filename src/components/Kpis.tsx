import React from "react";
import styled from "styled-components";

const KpisStyle = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	& > div {
		background-color: #e5e5e5;
		width: 100%;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		& > .key {
			font-size: 1.5rem;
			font-weight: 900;
		}
		& > .value {
			font-size: 1.2rem;
			font-weight: 400;
		}
	}
	@media (max-width: 570px) {
		flex-direction: column;
	}
`;

interface Props {
	texture: string;
	weight: string;
	size: string;
}

const Kpis: React.FC<Props> = ({ texture, weight, size }) => {
	return (
		<KpisStyle>
			<div>
				<p className="key">Texture:</p>
				<p className="value">{texture}</p>
			</div>
			<div>
				<p className="key">Weight:</p>
				<p className="value">{weight}</p>
			</div>
			<div>
				<p className="key">Size:</p>
				<p className="value">{size}</p>
			</div>
		</KpisStyle>
	);
};

export default Kpis;
