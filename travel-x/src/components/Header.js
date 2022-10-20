import React from "react";
import {Nav, NavLink, NavMenu} from "./NavbarElements";
import { DarkModeButton } from '../App';

const Navbar = () => {
    return (
        
        <>
            <Nav>
                <NavMenu>
                    <div className='headingTab Title'>
                        <header>
                            <h1>TravelX</h1>
                        </header>
                    </div>
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
                    <DarkModeButton />
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;