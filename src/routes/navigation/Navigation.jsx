import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from '../../assets/sg-logo.svg';

import CartIcon from "../../components/cart-icon/CartIcon";
import CartDropdown from "../../components/cart-dropdown/CartDropdown";

import './navigation.styles.scss';

import { UserContext } from "../../contexts/user.context";
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    
    const signOutHandler = async () => {
        await signOutUser;
    }

    return (
        <Fragment>
            <div className="navigation">
                <div className="nav-links-logo-container">
                    <Link className="logo-container" to='/'>
                        <Logo className='logo' style={{
                            maxWidth: '100%'
                        }}/>
                    </Link>
                </div>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                    ) : (
                        <Link className="nav-link" to='/auth'>SIGN IN</Link>
                    )}
                    <CartIcon />
                </div>
                    {isCartOpen && <CartDropdown />}
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;