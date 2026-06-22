function ProductCard({ product }) {
  return (
    <div className="card">
      <div className="discount">30% OFF</div>

      <img src={product.image} alt={product.name} />

      <div className="card-content">
        <h3>{product.name}</h3>

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>(4.9)</span>
        </div>

        <p className="price">₹{product.price}</p>

        <button className="add-btn">Add To Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;