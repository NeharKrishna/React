import products from "./ProductData";

function ProductDetails() {
    return (
        <div className="dummy-details">
            <h1>Product Details</h1>
            <div>
                {products.map((item) => (
                    <div key={item.id} className="dummy-item">
                        <img src={item.images} alt={item.name} />
                        <h2>{item.title}</h2>
                        <p>category: {item.category}</p>
                        <p>price: {item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductDetails;