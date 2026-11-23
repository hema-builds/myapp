import { useState } from 'react';
import ProductCard from './ProductCard';

function App() {
  const products = [
    { id: 1, name: 'Laptop', price: 55000, category: 'Electronics' },
    { id: 2, name: 'Headphones', price: 2500, category: 'Accessories' },
    { id: 3, name: 'Backpack', price: 1800, category: 'Fashion' },
    { id: 4, name: 'Water Bottle', price: 400, category: 'Home' }
  ];

  const [cartCount, setCartCount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Online Store</h1>
      <h2>Cart Items: {cartCount}</h2>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            onAddToCart={() => setCartCount(cartCount + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;