import AdminMain from "../components/AdminMain";
import AdminProducts from "../components/AdminProducts";
import Cart from "../components/Cart";
import NotFound from "../components/NotFound";
import Products from "../components/Products";
import UserMain from "../components/UserMain";

export const routes = [
    {
        path: '/',
        title: 'Shop',
        page: UserMain,
    },
    {
        path: '/products',
        title: 'Products',
        page: Products,
    },
    {
        path: '/cart',
        title: 'Cart',
        page: Cart,
    },
    {
        path: '/admin/add-product',
        title: 'Add Product',
        page: AdminMain,
    },
    {
        path: '/admin/products',
        title: 'Admin Products',
        page: AdminProducts,
    },
    {
        path: '*',
        title: 'Error',
        page: NotFound
    }
];