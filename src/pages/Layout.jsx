import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Section";
import { useNavbarContext } from "../contextproviders/NavProvider.jsx";

function Layout(){
    const { hideNavBar } = useNavbarContext();

    return (
        <>
            <Nav />
            <main id="main" onClick={hideNavBar}>
                <Outlet />
            </main>
        </>
    )
}

export default Layout;