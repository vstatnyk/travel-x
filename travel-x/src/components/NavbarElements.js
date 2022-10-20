import {NavLink as Link} from "react-router-dom"
import styled from "styled-components"

export const Nav = styled.nav`
    background: #42c2f5;
    display: flex;
    justify-content: space-between;

`;

export const NavLink = styled(Link)`
    color: #f59c42;
    display: flex;
    align-items: center;
    &.active(
        color: #6cf542;
    )
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
`;
