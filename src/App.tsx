import styled from "styled-components";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const AppStyle = styled.div`
	display: flex;
	flex-direction: column;
	& > header {
		background-color: #fff;
	}
	& > main {
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
				<Contact />
				<Footer />
			</BrowserRouter>
		</AppStyle>
	);
}

export default App;
