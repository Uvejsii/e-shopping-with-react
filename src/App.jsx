/* eslint-disable */
import MainLayout from "./pages/MainLayout.jsx";
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import "bootstrap/dist/css/bootstrap.min.css"
import NotFound from "./pages/NotFound.jsx";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
    </Route>
))

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    )
}

export default App
