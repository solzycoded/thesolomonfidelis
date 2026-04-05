import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Nav/Section.jsx";
import { useState, useEffect } from "react";
import { useNavbarContext } from "../contextproviders/NavProvider.jsx";
import useSEO from "../hooks/useSEO.js";

function Layout(){
    const { hideNavBar } = useNavbarContext();
    const location = useLocation();

    // Update SEO meta tags based on current route
    useSEO(location.pathname);
    const [isLargeScreen, setIsLargeScreen] = useState( // stores the value of the screen size 
        window.matchMedia("(min-width: 992px)").matches
    );

    useEffect(() => {
        // updates the state that tracks the width of the screen
        const mediaQuery = window.matchMedia("(min-width: 992px)");

        const handleResize = (e) => {
            setIsLargeScreen(e.matches);
        };

        mediaQuery.addEventListener("change", handleResize);

        return () => {
            mediaQuery.removeEventListener("change", handleResize);
        };
    }, [setIsLargeScreen]);

    const toggleNavBar = () => {
        if(isLargeScreen) {
            return;
        }

        return hideNavBar();
    }

    return (
        <>
            <Nav />
            <main id="main" onClick={toggleNavBar}>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;