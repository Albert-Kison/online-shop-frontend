import AdminMain from "../components/AdminMain";
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
        path: '/admin/add-product',
        title: 'Add Product',
        page: AdminMain,
    },
    {
        path: '*',
        title: 'Error',
        page: NotFound
    }
];