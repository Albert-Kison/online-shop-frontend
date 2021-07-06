import StyledNavLink from './NavLink';
import {routes} from '../routes/routes';

function Nav() {
    return (
        <ul className="main-header__item-list">
            {routes.slice(0, routes.length - 1).map((route, i) => {
                return (
                    <StyledNavLink exact activeStyle={{color: "#ffeb3b"}} to={route.path} key={i}>
                        <li className="main-header__item">{route.title}</li>
                    </StyledNavLink>
                )
            })}
        </ul>
    );
}

export default Nav;