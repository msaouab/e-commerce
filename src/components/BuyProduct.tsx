import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSelectedId } from "../../reducers/StoreSlice";

const Style = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	width: 100%;
	& .btn {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 3rem;
		cursor: pointer;
		font-size: 1rem;
		font-weight: 700;
		border: none;
		width: 100%;
		text-transform: uppercase;
		background: transparent;
	}
	& .add {
		color: #000;
		border: 2px solid #000;
	}
	& .buy {
		background-color: #b6002c;
		border: 2px solid #b6002c;
		color: #fff;
	}
	& .add:hover {
		background-color: #000;
		color: #fff;
	}
	& .buy:hover {
		background-color: #fff;
		color: #b6002c;
	}
`;

interface Item {
	item: {
		id: number;
		description: string;
		specs: string;
		price: number;
		img: string;
		otherImgs: string[];
	};
}

const BuyProduct: React.FC<Item> = ({ item }) => {
	const { id } = item;
	const dispatch = useDispatch();
	// const [counter, setCounter] = useState(1);

	console.log('id', id);

	// useEffect(() => {
	// 	const saveCounter = localStorage.getItem("counter");
	// 	if (saveCounter !== null) {
	// 		dispatch(setCount(Number(saveCounter)));
	// 	}
	// }, [dispatch]);

	// useEffect(() => {
	// 	localStorage.setItem("counter", counter.toString());
	// }, [counter]);

	const handleClick = () => {
		// const newCounter = counter + 1;
		// setCounter(newCounter);
		// dispatch(setCount(counter));
		dispatch(setSelectedId(id));
	};

	return (
		<Style className="">
			<button className="btn add" onClick={handleClick}>
				add to cart
			</button>
			<button className="btn buy">buy now</button>
		</Style>
	);
};

export default BuyProduct;
