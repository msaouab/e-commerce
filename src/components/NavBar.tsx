import styled from "styled-components";
import Logo from "/logo.png"
import { NavLink } from "react-router-dom";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

interface NavBarStyleProps {
	height: string;
}

const NavBarStyle = styled.header<NavBarStyleProps>`
	position: fixed;
	top: 0;
	width: 100%;
	height: ${(props) => props.height}px;
	transition: height 0.3s ease-in-out;
	box-shadow: 1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15);
	display: flex;
	justify-content: center;
	align-items: center;
	& > .hamburger {
		display: none;
	}
	& > .navContainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		width: 100%;
		& > a {
			& > img {
				width: 100px;
				max-width: 100%;
				box-sizing: border-box;
			}
			cursor: pointer;
		}
		& > nav {
			display: flex;
			gap: 2rem;
			& > ul {
				display: flex;
				justify-content: space-evenly;
				align-items: center;
				gap: 2.25rem;
				& > li {
					cursor: pointer;
					list-style: none;
					border-bottom: 2px solid transparent;
					& > a {
						text-decoration: none;
						color: #000;
						font-size: 1.125rem;
					}
				}
				& > li:hover {
					border-bottom: 2px solid #000;
				}
			}
			& > .shopIcon {
				margin-right: 1rem;
				list-style: none;
				cursor: pointer;
				& > svg {
					font-size: 1.5rem;
				}
			}
		}
	}
	@media (max-width: 1200px) {
		padding: 0 1rem;
	}
	@media (max-width: 768px) {
		flex-direction: row-reverse;
		position: relative;
		& > .hamburger {
			display: block;
		}
		& > .navContainer {
			& > nav {
				& > ul {
					display: none;
				}
			}
			& > .open {
				& > ul {
					background-color: #fff;
					display: flex;
					flex-direction: column;
					justify-content: center;
					position: absolute;
					top: 80px;
					right: 0px;
					width: 100%;
					box-shadow: 1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15);
				}
			}
		}
	}
	@media (max-width: 576px) {
		padding: 0 0 0 .5rem;
	}
`;

const NavBar = () => {
	const [isOpen, setOpen] = useState(false);
	const [scrollY, setScrollY] = useState(120);

	const handleScroll = () => {
		setScrollY(window.scrollY === 0 ? 120 : 70);
	};

	const handleTogle = () => {
		setOpen(!isOpen);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<NavBarStyle height={scrollY.toString()}>
			<div className="hamburger" onClick={handleTogle}>
				<Hamburger toggled={isOpen} toggle={handleTogle} rounded />
			</div>
			<div className="navContainer">
				<NavLink to={"/"}>
					<img src={Logo} alt="minimalist Ecommerce" />
				</NavLink>
				<nav className={isOpen ? "open " : ""}>
					<ul>
						<li>
							<NavLink to={"/"}>CATEGORIES</NavLink>
						</li>
						<li>
							<NavLink to={"/Product"}>PRODUCT PAGE</NavLink>
						</li>
					</ul>
					<li className="shopIcon">{<MdOutlineLocalGroceryStore />}</li>
				</nav>
			</div>
		</NavBarStyle>
	);
};

export default NavBar;
