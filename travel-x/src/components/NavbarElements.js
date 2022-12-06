import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #046b99;
    //display: flex;
    justify-content: space-between;
    height 90px;
    //padding: 10px;
    font-size: 25px;
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  display: flex;
  align-items: center;
  height: 90px;
  text-decoration: none;
  padding-left: 5%;
  padding-right: 5%;
  cursor: pointer;
  &:hover {
    background-color: #035376;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
`;
