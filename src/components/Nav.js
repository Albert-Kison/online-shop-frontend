import NavLink from './NavLink';

function Nav() {

    return (
        <ul className="main-header__item-list">
            <NavLink to="/">
                <li className="main-header__item">Shop</li>
            </NavLink>
            <NavLink to="/admin/add-product">
                <li className="main-header__item">Add product</li>
            </NavLink>
        </ul>
    );
}

export default Nav;