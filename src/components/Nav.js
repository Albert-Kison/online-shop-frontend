import StyledLink from './StyledLink';

function Nav() {

    return (
        <ul className="main-header__item-list">
            <StyledLink to="/">
                <li className="main-header__item">Shop</li>
            </StyledLink>
            <StyledLink to="/admin/add-product">
                <li className="main-header__item">Add product</li>
            </StyledLink>
        </ul>
    );
}

export default Nav;