import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import Button from '../button/Button'
import CartItem from '../cart-item/CartItem'
import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from './CartDropdownStyles.jsx'

const CartDropdown = () => {
	const { cartItems } = useContext(CartContext)
	const navigate = useNavigate()

	const goToCheckoutHandler = () => {
		navigate('/checkout')
	}

	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))
				) : (
					<EmptyMessage>Your cart is empty!</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
		</CartDropdownContainer>
	)
}

export default CartDropdown
