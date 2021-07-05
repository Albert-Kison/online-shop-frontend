import StyledNavLink from './NavLink';

function Nav() {

    return (
        <ul className="main-header__item-list">
            <StyledNavLink exact activeStyle={{color: "#ffeb3b"}} to="/">
                <li className="main-header__item">Shop</li>
            </StyledNavLink>
            <StyledNavLink exact activeStyle={{color: "#ffeb3b"}} to="/admin/add-product">
                <li className="main-header__item">Add product</li>
            </StyledNavLink>
        </ul>
    );
}

export default Nav;