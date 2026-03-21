import { useState, createContext, useContext, useMemo, useCallback } from "react";
import PropTypes from "prop-types";

const NavbarContext = createContext();

const NavProvider = ({children}) => {
    const [showNav, setShowNav] = useState(false);
    
    const updateNavbarDisplay = useCallback((showNavbar) => {
        setShowNav(showNavbar);

        const navBar      = document.querySelector("#header");
        navBar.style.left = !showNavbar ? "-300px" : 0;
    }, []);
    const toggleNavBar = useCallback(() => {
        updateNavbarDisplay(!showNav);
    }, [updateNavbarDisplay, showNav]);
    const hideNavBar = useCallback(() => {
        updateNavbarDisplay(false);
    }, [updateNavbarDisplay]);

    const value = useMemo(() => ({ showNav, toggleNavBar, hideNavBar }), [showNav, toggleNavBar, hideNavBar]);

    return (
        <NavbarContext.Provider value={value}>
            {children}
        </NavbarContext.Provider>
    )
}

// prop validation
NavProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export const useNavbarContext = () => useContext(NavbarContext); // to aid components in destructing context provider's objects

export default NavProvider;