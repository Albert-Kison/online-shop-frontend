import {useEffect, useState} from 'react';
import AdminProductCard from './AdminProductCard';

function AdminProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data);
            }).catch(err => {
                console.log(err.message);
            })
    }, []);

    return (
        <div>
            {products.length === 0 ? <h1>No products</h1> : 
            <div className="grid">
                {products.map((product, i) => {
                    return (
                        <AdminProductCard key={i} product={product} />
                    );
                })}
            </div>}
        </div>
    )
}

export default AdminProducts;