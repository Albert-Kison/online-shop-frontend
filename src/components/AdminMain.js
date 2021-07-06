import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import InputForm from './InputForm';

function AdminMain() {
    let history = useHistory();
    const [product, setProduct] = useState({
        title: "",
        imgUrl: "",
        description: "",
        price: 0,
    });

    function handleChange(e) {
        console.log(e.target.id);
        setProduct((values) => {return {...values, [e.target.id]: e.target.value}});
        console.log(product);
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3000/admin/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product),
            // mode: 'no-cors',
        }).then(res => {
            console.log('success');
        }).catch(err => {
            console.log(err.message);
        });

        history.push('/');
    }

    return (
        <div>
            <form className="product-form" onSubmit={handleSubmit}>
            
                <InputForm type="text" title="Title" id="title" onChange={handleChange} />
                <InputForm type="text" title="Image URL" id="imgUrl" onChange={handleChange} />
                <InputForm type="textarea" title="Description" id="description" onChange={handleChange} />
                <InputForm type="number" title="Price" id="price" onChange={handleChange} />

                <button className="btn" type="submit">Send</button>
            </form>
        </div>
    )
}

export default AdminMain;