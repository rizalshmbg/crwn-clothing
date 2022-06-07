import { useContext } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import CartIcon from '../../components/cart-icon/CartIcon'
import { CartContext } from '../../contexts/CartContext'
import { UserContext } from '../../contexts/UserContext'
import { signOutUser } from '../../utils/firebase/firebase.utils'
import './Navigation.scss'

const Navigation = () => {
	const { currentUser } = useContext(UserContext)
	const { isCartOpen } = useContext(CartContext)

	return (
		<>
			<div className='navigation'>
				<Link className='logo-container' to={'/'}>
					<CrownLogo className='logo' />
				</Link>
				<div className='nav-links-container'>
					<Link className='nav-link' to='/shop'>
						SHOP
					</Link>
					{currentUser ? (
						<span className='nav-link' onClick={signOutUser}>
							SIGN OUT
						</span>
					) : (
						<Link className='nav-link' to='/auth'>
							SIGN IN
						</Link>
					)}
					<CartIcon />
				</div>
				{isCartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</>
	)
}

export default Navigation
