import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: white;

    &:hover, &:active {
        color: #ffeb3b;
    }
    `;

const StyledNavLink = function(props) {
    return (
        <StyledLink {...props} />
    );
}

export default StyledNavLink;