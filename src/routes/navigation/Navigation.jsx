import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as Logo } from '../../assets/sg-logo.svg';

import './navigation.styles.scss';
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    
    const signOutHandler = async () => {
        await signOutUser;
    }

    return (
        <Fragment>
            <div className="navigation">
                <div className="nav-links-container">
                    <Link className="logo-container" to='/'>
                        <Logo className='logo' style={{
                            maxWidth: '5rem'
                        }}/>
                    </Link>
                    <Link className="nav-link" to='/shop'>SHOP</Link>
                    {currentUser ? (
                        <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
                    ) : (
                        <Link className="nav-link" to='/auth'>SIGN IN</Link>
                    )}
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation;