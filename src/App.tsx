import styled from "styled-components";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import ProductPage from "./pages/ProductPage";
import Categories from "./pages/Categories";
import Contact from "./components/Contact";

const AppStyle = styled.div`
	display: flex;
	flex-direction: column;
	& > header {
		background-color: #fff;
	}
	& > main {
		margin: 8.1rem 0;
	}
`;

function App() {
	return (
		<AppStyle className="">
			<Router>
				<NavBar 
				/>
				<main>
					<Routes>
						<Route path={"/"} element={<Home />} />
						<Route path={"/categories"} element={<Categories />}>
							{/* <Route
								path={":categories"}
								element={<Categories />}
							/> */}
						</Route>
						{/* <Route path={"/product"} element={<ProductPage />}>
							<Route
								path={":product"}
								element={<ProductPage />}
							></Route>
						</Route> */}
					</Routes>
				</main>
				<Contact />
				<Footer />
			</Router>
		</AppStyle>
	);
}

export default App;
