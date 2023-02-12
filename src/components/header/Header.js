import React from 'react';
import "./header.css"
import LogoContent from "../headerChild/LogoContent";
import Nav from "../headerChild/Nav";
import Address from "../headerChild/Address";
import Contact from "../headerChild/Contact";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <LogoContent/>
                    <Nav/>
                    <Address/>
                    <Contact/>
                </div>
            </div>
        </header>
    );
}

export default Header;