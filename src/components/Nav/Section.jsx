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
                        <NavItem icon="person-workspace" link="/porfolio" title="Portfolio" />
                        <NavItem icon="phone" link="/porfolio" title="Contact" />
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Nav;