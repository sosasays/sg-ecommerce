import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Logo } from '../../assets/sg-logo.svg';
import './navigation.styles.scss';

const Navigation = () => {
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
                <Link className="nav-link" to='/signin'>SIGN IN</Link>
            </div>
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigation;