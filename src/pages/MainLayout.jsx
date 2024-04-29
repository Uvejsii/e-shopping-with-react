// import HomePage from "./HomePage.jsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <main>
            < Outlet />
        </main>
    )
}
export default MainLayout;