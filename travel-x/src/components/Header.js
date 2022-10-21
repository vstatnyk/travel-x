import React from "react";
import {Nav, NavLink, NavMenu} from "./NavbarElements";
import { DarkModeButton } from '../App';

const Navbar = () => {
    return (
        
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        <div className='headingTab Title'>
                            <header>
                                <h1>TravelX</h1>
                            </header>
                        </div>
                    </NavLink>
                    <NavLink to="/Login" activeStyle>
                        Login
                    </NavLink>
                    <NavLink to="/Search" activeStyle>
                        Search
                    </NavLink>
                    <NavLink to="/About" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/Contact" activeStyle>
                        Contact
                    </NavLink>
                    <div className="DarkModeButton">
                        <DarkModeButton />
                    </div>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;