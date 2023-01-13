import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";
import { UserContext } from "../../contexts/UserContext";
import { CartContext } from "../../contexts/CartContext";

import { signOutUser } from "../../utils/firebase/firebase";

import {
	NavigationContainer,
	LogoContainer,
	NavLink,
	NavLinks,
} from "./navigation.styles.jsx";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	console.log(currentUser);
	return (
		<>
			<NavigationContainer className="navigation">
				<LogoContainer to="/">
					<CrwnLogo className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">SHOP</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to="/auth">SIGN IN</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
