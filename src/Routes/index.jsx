import path from "path";
import ProductDetail from "../Components/ProductDetail";
import Home from "../Pages/Home";
import AllFilterProduct from "../Components/FilterComponent/AllFilterProduct";
import Login from "../Components/LoginPage";



export const routes = [


    {
        id:1,
        path:"/",
        element:<Home/>
    },
    {
        id:2,
        path:"/details/:id/:v_id/:slug",
        element:<ProductDetail/>
    },
    {
        id:3,
        path:"/filter",
        element:<AllFilterProduct/>
    },
    {
        id:4,
        path:"/login",
        element:<Login/>
    },
    // {
    //     id:5,
    //     path:"/",
    //     element:<Home/>
    // }

]