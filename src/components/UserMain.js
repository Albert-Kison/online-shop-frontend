import {useEffect, useState} from 'react';

function UserMain() {
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
            <h1>My products</h1>
            {products.map((product, i) => {
                return (
                    <p key={i}>{i + 1}. {product.title}</p>
                );
            })}
        </div>
    )
}

export default UserMain;