import NavItem from "./Item";

import "../../assets/css/nav.css"

function Nav(){
    return (
        <>
            <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
            <header id="header" className="d-flex flex-column justify-content-center">

                <nav id="navbar" className="navbar nav-menu">
                    <ul>
                        <NavItem icon="house" link="" title="Home" />
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