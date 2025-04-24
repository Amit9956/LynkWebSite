import path from "path";
import ProductDetail from "../Components/ProductDetail";
import Home from "../Pages/Home";
import AllFilterProduct from "../Components/FilterComponent/AllFilterProduct";
import Login from "../Components/LoginPage";
import Modal from "../Components/Modal"
import Wishlist from "../Components/WishlistCard";
import EmptyCart from "../Components/CartADD";



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
    {
        id:5,
        path:"/modal",
        element:<Modal/>
    },
    {
        id:6,
        path:"/wishlistCard",
        element:<Wishlist/>
    },
    {
        id:7,
        path:"/cart",
        element:<EmptyCart/>
    }

]