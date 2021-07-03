import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:hover, &:active {
        color: #3e00a1;
    }
    `;

export default (props) => <StyledLink {...props} />;