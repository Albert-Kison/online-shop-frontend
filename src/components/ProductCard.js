function ProductCard(props) {
    return (
        <div>
            <article className="card product-item">
                <header className="card__header">
                    <h1 className="product__title">{props.product.title}</h1>
                </header>
                <div className="card__image">
                    <img src={props.product.imgUrl} alt="A Book" />
                </div>
                <div className="card__content">
                    <h2 className="product__price">{props.product.price}</h2>
                    <p className="product__description">{props.product.description}</p>
                </div>
                <div className="card__actions">
                    <button className="btn">Add to Cart</button>
                </div>
            </article>
        </div>
    );
}

export default ProductCard;