import styled from "styled-components";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ProductPage from "./pages/ProductPage";
import Categories from "./pages/Categories";

const AppStyle = styled.div`
	display: flex;
	flex-direction: column;
	& > header {
		background-color: #fff;
	}
	& > main {
		margin-bottom: 6rem;
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
						<Route path={"/Product"} element={<ProductPage />} />
						<Route path={"/categories"} element={<Categories />} />
					</Routes>
				</main>
				<Contact />
				<Footer />
			</BrowserRouter>
		</AppStyle>
	);
}

export default App;
