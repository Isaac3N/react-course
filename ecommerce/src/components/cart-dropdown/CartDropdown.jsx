import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from "./cart-dropdown.styles";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);
	const navigate = useNavigate();

	const goToCheckOutHandler = () => {
		navigate("/checkout");
	};

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage> Your cart is empty </EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
