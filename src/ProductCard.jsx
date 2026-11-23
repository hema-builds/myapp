function ProductCard({ name, price, category, onAddToCart }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: 8,
      padding: 16,
      margin: 10,
      width: 200
    }}>
      <h3>{name}</h3>
      <p>Price: ₹{price}</p>
      <p>Category: {category}</p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;