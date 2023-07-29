import styled from "styled-components";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const AppStyle = styled.div`
	display: flex;
	flex-direction: column;
	& > main {
		max-width: 1200px;
		margin: 0 auto;
	}
`;

function App() {
	return (
		<AppStyle>
			<BrowserRouter>
				<NavBar />
				<main>
					<Routes>
						<Route path={"/"} element={<Home />} />
					</Routes>
				</main>
				<Footer />
			</BrowserRouter>
		</AppStyle>
	);
}

export default App;
