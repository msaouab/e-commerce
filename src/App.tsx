import styled from "styled-components";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

const AppStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	& > header {
		background-color: #fff;
	}
	& > main {
		max-width: 1200px;
		margin: 0 auto;
		padding-bottom: 10rem;
	}
	& > footer {
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
