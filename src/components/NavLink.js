import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:hover, &:active {
        color: #ffeb3b;
    }
    `;

const NavLink = function(props) {
    return (
        <StyledLink {...props} />
    );
}

export default NavLink;