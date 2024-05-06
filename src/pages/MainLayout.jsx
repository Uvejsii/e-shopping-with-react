import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

const MainLayout = () => {
    return (
        <>
            <main>
                < Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </>
    )
}
export default MainLayout;