import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Section";
import { useState, useEffect } from "react";
import { useNavbarContext } from "../contextproviders/NavProvider.jsx";

function Layout(){
    const { showNav, hideNavBar } = useNavbarContext();
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