import {useState} from 'react';
import {useHistory} from 'react-router-dom';

function AdminMain() {
    const [product, setProduct] = useState("");
    let history = useHistory();

    function handleChange(e) {
        setProduct(e.target.value);
        console.log(product);
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3000/admin/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: product}),
            // mode: 'no-cors',
        }).then(res => {
            console.log('success');
            history.push('/');
        }).catch(err => {
            console.log(err.message);
        });
    }

    return (
        <div>
            <form className="product-form" onSubmit={handleSubmit}>
            <div className="form-control">
            <label htmlFor="title">Title</label>
                <input type="text" onChange={handleChange} value={product} id="title"/>
            </div>
                <button className="btn" type="submit">Send</button>
            </form>
        </div>
    )
}

export default AdminMain;