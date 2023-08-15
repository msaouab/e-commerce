import styled from "styled-components";

const Style = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 100%;
	& .btn {
		border: 2px solid #000;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 3rem;
		cursor: pointer;
		& button {
			cursor: pointer;
			font-size: 1rem;
			font-weight: 700;
			border: none;
			width: 100%;
			text-transform: uppercase;
			background: transparent;
			
		}
	}
	& .add {
		& > button {
			color: #000;
		}
	}
	& .buy {
		background-color: #b6002c;
		border: 2px solid #b6002c;
		& > button {
			color: #fff;
		}
	}
	& .add:hover {
		background-color: #000;
		& > button {
			color: #fff;
		}
	}
	& .buy:hover {
		background-color: #fff;
		& > button {
			color: #b6002c;
		}
	}
`;

const BuyProduct = () => {
	return (
		<Style className="">
			<div className="btn add">
				<button>add to cart</button>
			</div>
			<div className="btn buy">
				<button>buy now</button>
			</div>
		</Style>
	);
};

export default BuyProduct;
