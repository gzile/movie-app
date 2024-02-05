import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

const StyledLink = styled(ReactRouterLink)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default StyledLink;
