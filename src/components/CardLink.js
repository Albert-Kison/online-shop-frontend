import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
    margin: 0 0.25rem;
    `;

const CardLink = function(props) {
    return (
        <StyledLink {...props} />
    );
}

export default CardLink;