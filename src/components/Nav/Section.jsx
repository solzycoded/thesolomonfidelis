import NavItem from "./Item"
import { useState } from "react";

import "../../assets/css/nav.css"
import { useNavbarContext } from "../../contextproviders/NavProvider.jsx";

function Nav(){
    const { toggleNavBar, showNav } = useNavbarContext();

    return (
        <>
            <i className={ (`rounded-circle bi mobile-nav-toggle d-lg-none bi-chevron-${showNav ? "left" : "right"}`) } onClick={toggleNavBar}></i>
            <header id="header" className="d-flex flex-column justify-content-center">

                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        <NavItem icon="house" link="" title="Home" />
                        <NavItem icon="person-fill" link="/about" title="About Me" />
                        <NavItem icon="controller" link="/interests" title="Interests" />
                        <NavItem icon="file-earmark-richtext" link="/resume" title="Resume" />
                        <NavItem icon="person-fill-gear" link="/skills" title="Skills" />
                        <NavItem icon="list-columns" link="/portfolio" title="Portfolio" />
                        <NavItem icon="telephone" link="/contact" title="Contact" />
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Nav;