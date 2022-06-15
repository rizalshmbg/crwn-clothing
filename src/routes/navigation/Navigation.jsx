import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import CartIcon from '../../components/cart-icon/CartIcon'
import { CartContext } from '../../contexts/CartContext'
import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './NavigationStyles'

const Navigation = () => {
	const { currentUser } = useContext(UserContext)
	const { isCartOpen } = useContext(CartContext)

	return (
		<>
			<NavigationContainer>
				<LogoContainer to={'/'}>
					<CrownLogo className='logo' />
				</LogoContainer>
				<NavLinks>
					<NavLink to='/shop'>
						SHOP
					</NavLink>
					{currentUser ? (
						<NavLink as='span' onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink to='/auth'>
							SIGN IN
						</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	)
}

export default Navigation
